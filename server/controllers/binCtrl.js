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
