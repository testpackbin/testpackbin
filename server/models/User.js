'use strict'

const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
const _ = require('lodash');
const Bin = require('./Bin');


const userSchema = new mongoose.Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  courses: [{
    courseId: {type: ObjectId, ref: 'Bin'},
    binId: {type: ObjectId, ref: 'Bin'}
  }],
  isAdmin: {type: Boolean, default: false}
})

const User = mongoose.model('User', userSchema);


userSchema.statics.findByIdAndUpdateCourses = function(id, obj) {
  return this.findById(id, (e, user) => {
    let course = _.find(user.courses, {course: obj.course})
    let ans;
    if (course) {
      course.bin = obj.bin
    } else {
      user.courses.push({
        courseId: obj.course,
        binId: obj.bin
      })
    }
    return user.save();
  })

}


module.exports = User;
