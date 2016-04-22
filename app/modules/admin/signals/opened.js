import setPage from 'common/factories/actions/setPage';
import set from 'cerebral-addons/set';
import copy from 'cerebral-addons/copy';
import loadUsers from '../actions/loadUsers';
import showSnackbar from 'common/factories/actions/showSnackbar';
import setUsers from '../actions/setUsers';

export default [
  setPage('admin'),
  set('state:/admin.isLoading', true),
  loadUsers, {
    success: [setUsers],
    error: [showSnackbar('Error retrieving users!')]
  },
  set('state:/admin.isLoading', false)
];
