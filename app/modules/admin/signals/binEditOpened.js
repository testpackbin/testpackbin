import setPage from 'common/factories/actions/setPage';
import set from 'cerebral-addons/set';
import copy from 'cerebral-addons/copy';
import when from 'cerebral-addons/when';
import loadBin from '../actions/loadBin';
import showSnackbar from 'common/factories/actions/showSnackbar';
import setBin from '../actions/setBin';

export default [
   setPage('binEdit'),
   set('state:/admin.isLoading', true),
   when('input:/id'), {
     isTrue: [
       loadBin, {
       success: [setBin],
       error: [showSnackbar('Error retrieving the course!')]
     }],
     isFalse: []
   },
   set('state:/admin.isLoading', false)
];
