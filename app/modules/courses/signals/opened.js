import setPage from 'common/factories/actions/setPage';
import set from 'cerebral-addons/set';
import copy from 'cerebral-addons/copy';
import when from 'cerebral-addons/when';
import loadUser from '../actions/loadUser';
import redirectToAdmin from '../actions/redirectToAdmin';
import showSnackbar from 'common/factories/actions/showSnackbar';
import setSession from '../actions/setSession';

export default [
  set('state:/courses.isLoading', true),
  setPage('courses'),
  when('input:/jwt'), {
    isTrue: [
      loadUser, {
      success: [setSession],
      error: [showSnackbar('Error retrieving the course!')]
    }],
    isFalse: []
  },
  when('state:/user.user.isAdmin'), {
    isTrue: [redirectToAdmin],
    isFalse: []
  },
  set('state:/courses.isLoading', false),
  copy('state:/user.user.courses', 'state:/courses.courses')
];
