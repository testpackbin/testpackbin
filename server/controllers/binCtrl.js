'use strict'

const mongoose = require('mongoose'),
      User = require('../models/User'),
      Bin = require('../models/Bin');

const ObjectId = mongoose.Schema.ObjectId;

module.exports = {
  create(req, res) {
    new Bin(req.body)
    .save(req.body, (err, bin) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
      } else {
        res.status(200).send(bin);
      }

    })
  },

  boilerplates(req, res, next) {
    if (req.params.id !== 'boilerplates') return next();

    Bin.find({isBoilerplate: true}).exec()
    .then(bins => res.status(200).send(bins))
    .catch(err => res.status(500).send(err));
  },

  update(req, res) {
    Bin.findByIdAndUpdate(req.body._id, {$set: req.body}, (err, r) => {
      if (err) { console.log(err); res.sendStatus(500) }
      res.sendStatus(200);
    })
  },

  show(req, res) {
    Bin.findById(req.params.id).exec()
    .then(bin => {
      res.status(200).send(bin);
    })
    .catch(err => {
      res.status(500).send(err);
    })
  },

  delete(req, res) {
    Bin.remove({_id: req.params.id}).exec()
    .then(result => {
      res.sendStatus(200);
    })
    .catch(err => {
      res.status(500).send(err);
    })
  }
};
