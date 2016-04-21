import loadUsers from '../actions/loadUsers';
import showSnackbar from 'common/factories/actions/showSnackbar';
import setUsers from '../actions/setUsers';
import removeUser from '../actions/removeUser';
import removeLocalUser from '../actions/removeLocalUser';

export default [
  removeUser, {
    success: [removeLocalUser],
    error: [showSnackbar('Error retrieving users!')]
  }
]