 const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const binSchema = new mongoose.Schema({
  author: {type: String, required: true},
  files: [{
    name: {type: String, required: true},
    content: {type: String},
    isEntry: {type: Boolean, default: false}
  }],
  tests: [{
    name: {type: String, required: true},
    content: String,
    isEntry: Boolean,
  }],
  id: {type: String},
  isBoilerplate: {type: Boolean},
  loaders: {},
  packages: {},
  name: {type: String},
  readme: {type: String},
  subject: {type: String},
  description: {type: String}
})

module.exports = mongoose.model('Bin', binSchema);
