import setPage from 'common/factories/actions/setPage';
import set from 'cerebral-addons/set';
import when from 'cerebral-addons/when';
import loadBin from '../actions/loadBin';
import setBin from '../actions/setBin';
import showSnackbar from 'common/factories/actions/showSnackbar';

export default [
  setPage('testEdit'),
  when('input:/id'), {
    isTrue: [
      loadBin, {
        success: [setBin],
        error: [showSnackbar('Error retrieving this course!')]
      }
    ],
    isFalse: []
  }
]
