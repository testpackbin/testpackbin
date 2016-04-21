import loadUsers from '../actions/loadUsers';
import showSnackbar from 'common/factories/actions/showSnackbar';
import setUsers from '../actions/setUsers';

export default [
  loadUsers, {
    success: [setUsers],
    error: [showSnackbar('Error retrieving users!')]
  }
]