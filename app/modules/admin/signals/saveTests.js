import updateBin from '../actions/updateBin';
import setPage from 'common/factories/actions/setPage';
import showSnackbar from 'common/factories/actions/showSnackbar';

export default [
  updateBin, {
    success: [
      setPage('admin'),
      showSnackbar('Tests Saved!')
    ],
    error: [showSnackbar('Error saving tests!')]
  }
]
