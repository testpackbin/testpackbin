const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const userSchema = new mongoose.Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  courses: [{
    courseId: {type: String, required: true},
    binId: {type: String}
  }]
})

module.exports = mongoose.model('User', userSchema);
