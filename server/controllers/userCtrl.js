'use strict'

const User = require('../models/User');
const Promise = require('bluebird');

module.exports = {
  login(req, res) {
    res.status(200).send(req.body);
  },

  create(req, res) {
    new User(req.body)
    .save(req.body, (err, user) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
      } else {
        res.status(200).send(user);
      }
    })
  },

  update(req, res) {

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
