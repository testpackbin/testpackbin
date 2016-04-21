import setPage from 'common/factories/actions/setPage';
import set from 'cerebral-addons/set';
import copy from 'cerebral-addons/copy';


export default [
  setPage('admin'),
  set('state:/admin.isLoading', true),

  set('state:/admin.isLoading', false)
];
