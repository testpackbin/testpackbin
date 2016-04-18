 const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const binSchema = new mongoose.Schema({
  author: {type: String, required: true},
  files: [{
    name: {type: String, required: true},
    content: {type: String}
  }],
  tests: [{
    name: {type: String, required: true},
    content: String
  }],
  id: {type: String},
  isBoilerplate: {type: Boolean},
  loaders: {},
  packages: {},
  name: {type: String},
  readme: {type: String},
  subject: {type: String},
})

module.exports = mongoose.model('Bin', binSchema);
