import deleteDescription from '../actions/deleteDescription';
import showSnackbar from 'common/factories/actions/showSnackbar';
import removeDescriptionFromList from '../actions/removeDescriptionFromList';
export default [
  deleteDescription, {
    success: [removeDescriptionFromList],
    error: [showSnackbar('Error while retrieving descriptions!')]
  }
];
