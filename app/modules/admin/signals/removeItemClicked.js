import loadUsers from '../actions/loadUsers';
import showSnackbar from 'common/factories/actions/showSnackbar';
import setUsers from '../actions/setUsers';
import removeItem from '../actions/removeItem';
import removeLocalItem from '../actions/removeLocalItem';

export default [
  removeItem, {
    success: [removeLocalItem],
    error: [showSnackbar('Error removing users!')]
  }
]