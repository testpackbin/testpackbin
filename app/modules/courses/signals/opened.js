import setPage from 'common/factories/actions/setPage';
import set from 'cerebral-addons/set';
import copy from 'cerebral-addons/copy';
import when from 'cerebral-addons/when';
import loadCourses from '../actions/loadCourses';
import showSnackbar from 'common/factories/actions/showSnackbar';
import setSession from '../actions/setSession';

let userLoaded = when('state:user.user', {
  loaded:
  empty:
});


export default [
  setPage('courses'),
  set('state:/courses.isLoading', true),
  setSession,
  when('state:/user.user')
  loadCourses, {
    success: [copy('input:/courses', 'state:/courses.courses')],
    error: [showSnackbar('Error retrieving the course!')]
  },
  set('state:/courses.isLoading', false)
];
