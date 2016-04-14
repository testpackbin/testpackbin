import setPage from 'common/factories/actions/setPage';
import set from 'cerebral-addons/set';
import copy from 'cerebral-addons/copy';
import loadCourses from '../actions/loadCourses';
import showSnackbar from 'common/factories/actions/showSnackbar';
import setSession from '../actions/setSession';

export default [
  setPage('courses'),
  set('state:/courses.isLoading', true),
  setSession,
  loadCourses, {
    success: [copy('input:/courses', 'state:/courses.courses')],
    error: [showSnackbar('Error retrieving the course!')]
  },
  set('state:/courses.isLoading', false)
];
