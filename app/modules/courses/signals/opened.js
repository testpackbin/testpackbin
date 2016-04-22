import setPage from 'common/factories/actions/setPage';
import set from 'cerebral-addons/set';
import copy from 'cerebral-addons/copy';
import when from 'cerebral-addons/when';
import loadUser from '../actions/loadUser';
import showSnackbar from 'common/factories/actions/showSnackbar';
import setSession from '../actions/setSession';
import loadCourses from '../actions/loadCourses';

export default [
  setPage('courses'),
  set('state:/courses.isLoading', true),
  when('input:/jwt'), {
    isTrue: [
      loadUser, {
      success: [setSession],
      error: [showSnackbar('Error retrieving the course!')]
    }],
    isFalse: []
  },

  //copy('state:/user.user.courses', 'state:/courses.courses'),
  loadCourses, {
    success: [copy('input:/userCourses', 'state:/courses.courses')],
    error: [showSnackbar('Error retrieving the course!')]
  },
  set('state:/courses.isLoading', false)
];
