import setPage from 'common/factories/actions/setPage';
import set from 'cerebral-addons/set';
import copy from 'cerebral-addons/copy';
import when from 'cerebral-addons/when';
//import loadUser from '../actions/loadUser';
import showSnackbar from 'common/factories/actions/showSnackbar';
//import setSession from '../actions/setSession';

export default [
   setPage('binEdit')
  // set('state:/admin.isLoading', true),
  // when('input:/jwt'), {
  //   isTrue: [
  //     loadUser, {
  //     success: [setSession],
  //     error: [showSnackbar('Error retrieving the course!')]
  //   }],
  //   isFalse: [setSession]
  // },
  // set('state:/admin.isLoading', false)
];