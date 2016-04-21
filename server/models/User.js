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
  isAdmin: {type: Boolean}
})


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

userSchema.methods.getCourses = function() {
  const user = this;

  return new Promise((resolve, reject) => {
    Bin.find({isBoilerplate: true}).exec()
    .then(courses => {
      const ids = courses.map(val => {
        return {courseId: val._id, binId: null}
      })
      return User.findByIdAndUpdate(user._id, {courses: ids}, {new: true})
    })
    .then(user => {
      resolve(user);
    })
    .catch(err => {
      console.log(err);
      reject(err);
    })
  })
}

const User = mongoose.model('User', userSchema);
module.exports = User;
