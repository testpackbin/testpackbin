'use strict'

const
  User = require('../models/User'),
  Bin = require('../models/Bin'),
  _ = require('lodash'),
  config  = require('../config'),
  jwt = require('jsonwebtoken');


function createToken(user) {
  return jwt.sign(_.omit(user, 'password'), config.secret, { expiresIn: 60*60*5 });
}

function getUserScheme(req) {

  var username;
  var type;
  var userSearch = {};

  // The POST contains a username and not an email
  if(req.body.username) {
    username = req.body.username;
    type = 'username';
    userSearch = { username: username };
  }
  // The POST contains an email and not an username
  else if(req.body.email) {
    username = req.body.email;
    type = 'email';
    userSearch = { username: username };
  }

  return {
    username: username,
    type: type,
    userSearch: userSearch
  };
}

var errorMsg = {
  noPair: "You must send the username and the password",
  exists: "A user with that username already exists",
  noMatch: "The username or password don't match"
};

module.exports = {

  create(req, res) {
    const userScheme = getUserScheme(req);
    let newUserId, profile;
    if (!userScheme.username || !req.body.password) {
      console.log('Sending headers');
      return res.status(400).send(errorMsg.noPair);
    }

    User.findOne(userScheme.userSearch).exec()
    .then(user => {
      if (user) {
        console.log('user exists! sending headers');
      return errorMsg.exists;
      }

      profile = _.pick(req.body, userScheme.type, 'password', 'extra');

      return new User({
        username: profile.email || profile.username,
        password: profile.password
      }).save()
    })
    .then(user => {
      newUserId = user._id;
      return Bin.find({isBoilerplate: true}).exec();
    })
    .then(courses => {
      const ids = courses.map(val => {
        return {courseId: val._id, binId: null}
      })

      return User.findByIdAndUpdate(newUserId, { $set: {"courses": ids} });
    })
    .then(user => {
      return User.findById(newUserId)
      .populate({
        path: "courses.courseId",
        select: "-files -tests"
      }).exec()
    .then(user => {

      res.status(201).send({
        user: user,
        id_token: createToken(profile)
      });
    })
    .catch(err => {

      res.send(err)
    });
  })
},


  login(req, res) {

    const userScheme = getUserScheme(req);

    if (!userScheme.username || !req.body.password) {
      return res.status(400).send(errorMsg.noPair);
    }
    User.findOne(userScheme.userSearch)
    .populate({
      path: "courses.courseId",
      select: "-files -tests"
    })
    .populate({
      path: "courses.binId",
      select: "-files -tests"
    })
    .exec()
    .then(user => {

      if (!user) {
        return res.status(401).send(errorMsg.noMatch);
      }

      if (user.password !== req.body.password) {
        return res.status(401).send(errorMsg.noMatch);
      }
      res.status(201).send({
        user: user,
        id_token: createToken(user)
      })
    })
    .catch(err => res.send(err));
  },



  update(req, res) {

    let update;
    if (req.body.course) {
      update = User.findByIdAndUpdateCourses(req.body.user || req.params.id, req.body)
    } else {
      update = User.findByIdAndUpdate(req.body._id || req.params.id, {$set: req.body})
    }

    update.then(user => {
      res.sendStatus(200)
    })
    .catch(err => res.status(500).send(err))

  },

  show(req, res) {

    if (req.params.id === 'index') return;

    return User.findById(req.params.id || req.query.user)
    .populate({
      path: "courses.courseId",
      select: "-files -tests"
    })
    .populate({
      path: "courses.binId",
      select: "-files -tests"
    })
    .exec()
    .then(user => {
      res.status(200).send(user);
    })
    .catch(err => res.status(500).send(err));
  },

  index(req, res) {

    return User.find({})
    .populate('_id', 'name')
    .exec()
    .then(users => {
      res.status(200).send(users);
    })
    .catch(err => {
      console.log(err)
      res.status(500).send(err);
    })

  },

  delete(req, res) {
    return User.remove({_id: req.params.id}).exec()
    .then(result => {
      res.sendStatus(200)
    })
    .catch(err => {
      res.sendStatus(500);
    })
  }
};
