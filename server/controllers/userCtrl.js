const User = require('../models/User');

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
    User.findByIdAndUpdate(req.body._id, {$set: req.body}, (err, r) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
      } else {
        res.sendStatus(200);
      }
    })
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
