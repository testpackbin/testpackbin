'use strict'

const
  User = require('../models/User'),
  Bin = require('../models/Bin'),
  _ = require('lodash'),
  config  = require('../config'),
  jwt = require('jsonwebtoken'),
  Promise = require('bluebird');


function createToken(pwd) {
  return jwt.sign(pwd, config.secret, { expiresIn: 60*60*5 });
}

var errorMsg = {
  noPair: "You must send the username and the password",
  exists: "A user with that username already exists",
  noMatch: "The username or password don't match"
};

function setUserCourses(id) {
  return Bin
  .find({isBoilerplate: true})
  .exec()
  .then(courses => {
    const ids = courses.map(val => ({courseId: val._id, binId: null}))
    return User.findByIdAndUpdate(id, {$set: {"courses": ids}}, {new: true});
  })
}

function getUserQuery(id) {
  return User
    .findById(id)
    .select("-password")
    .populate({
      path: "courses.courseId",
      select: "-files -tests"
    })
    .populate({
      path: "courses.binId",
      select: "-files -tests"
    })
    .exec()
}

module.exports = {
  create(req, res) {
    if (!req.body.email || !req.body.password) {
      return res.status(400).send(errorMsg.noPair);
    }

    User.findOne({username: req.body.username}).exec()
    .then(user => {
      if (user) return res.status(400).send(errorMsg.exists);
 
      return new User({
        username: req.body.email,
        password: req.body.password
      }).save()
    })
    .then(user => setUserCourses(user._id))
    .then(user => {console.log('ppp',user);return getUserQuery(user._id)})
    .then(user => {
      res.status(200).send({
        user: user,
        id_token: createToken(req.body.password)
      });
    })
    .catch(err => {
      console.log(err);
      res.send(err)
    });
  },

  login(req, res) {
    if (!req.body.email || !req.body.password) {
      return res.status(400).send(errorMsg.noPair);
    }
    User.findOne({username: req.body.email}).exec()
    .then(user => {

      if (!user) {
        return res.status(401).send(errorMsg.noMatch);
      }

      if (user.password !== req.body.password) {
        return res.status(401).send(errorMsg.noMatch);
      }
      return (_.isEmpty(user.courses))?setUserCourses(user._id):user;
    })
    .then(user => getUserQuery(user._id)) //make full query hiding password
    .then(user => {
      res.status(200).send({
        user: user,
        id_token: createToken(req.body.password)
      });
    })
    .catch(err => res.status(500).send(err));
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
    return getUserQuery(req.params.id || req.query.user)
    .then(user => (_.isEmpty(user.courses))?setUserCourses(user._id):user)
    .then(user => res.status(200).send(user))
    .catch(err => res.status(500).send(err));
  },

  index(req, res) {
    return User.find({isAdmin: false})
    .select('_id username')
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
