import set from 'cerebral-addons/set';
import saveCourse from '../actions/saveCourse.js';
import redirectToCourse from '../actions/redirectToCourse.js';
import showSnackbar from 'common/factories/actions/showSnackbar.js';

export default [
  set('state:/courses.isSavingNewCourse', true),
  saveCourse, {
    success: [redirectToCourse],
    error: [showSnackbar('Failed to save courses')]
  }
];
