'use strict'

const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
const _ = require('lodash');

const userSchema = new mongoose.Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  courses: [{
    course: {type: String, required: true},
    bin: {type: String}
  }]
})

userSchema.statics.findByIdAndUpdateCourses = function(id, obj) {
  return this.findById(id, (e, user) => {
    let course = _.find(user.courses, {course: obj.course})
    if (course) {
      course.bin = obj.bin
    } else {
      user.courses.push({
        course: obj.course,
        bin: obj.bin
      })
    }

    return user.save();
  })

}

module.exports = mongoose.model('User', userSchema);
