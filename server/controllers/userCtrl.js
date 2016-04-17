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
    let newUserId;
    if (!userScheme.username || !req.body.password) {
      return res.status(400).send(errorMsg.noPair);
    }

    User.findOne(userScheme.userSearch, (e, user) => {
      if (user) {

      return res.status(400).send(errorMsg.exists);
      }

      let profile = _.pick(req.body, userScheme.type, 'password', 'extra');

      return new User({
        username: profile.username || profile.email,
        password: profile.password
      }).save((e, r) => {
        if (e) console.log(e);
      })
    })
    .then(user => {
      newUserId = user._id;
      return Bin.find({isBoilerplate: true}).exec();
    })
    .then(courses => {
      const ids = courses.map(val => {console.log(val); return {courseId: val._id});
      return User.findByIdAndUpdate(newUserId, { $set: {"courses": ids} });
    })
    .then(user => {
      return User.findById(newUserId)
      .populate({
        path: "courses.courseId",
        select: "-files -tests"
      })
    .exec()
    .then( user => {
      res.status(201).send({
        user: user,
        id_token: createToken(profile)
      });
    })
    .catch(err => res.send(err));
  }


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
    .then( (e, user) => {
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
  }



  update(req, res) {

    console.log(`Updating user ${req.body.user}`);
    console.log('Request is', req.body);
    let update;
    if (req.body.course) {
      update = User.findByIdAndUpdateCourses(req.body.user || req.params.id, req.body)
    } else {
      update = User.findByIdAndUpdate(req.body.user || req.params.id, {$set: req.body})
    }

    update.then(user => {
      res.sendStatus(200)
    })
    .catch(err => res.status(500).send(err))

  },

  show(req, res) {
    User.findById(req.params.id, (e, user) => {
      if (e) {
        console.log(e);
        res.sendStatus(500);
      } else {
        res.status(200).send(user);
      }
    })
  }
};
