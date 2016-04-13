import set from 'cerebral-addons/set';
import when from 'cerebral-addons/when';
import createDescription from '../actions/createDescription';
import showSnackbar from 'common/factories/actions/showSnackbar.js';
import resetNewDescriptionFields from '../actions/resetNewDescriptionFields';
import updateDescription from '../actions/updateDescription';


const whenSelectedDescription = when('state:/courses.selectedDescription', {updated: when.truthy, created: when.otherwise});

export default [
  set('state:/courses.isSavingDescription', true),
  whenSelectedDescription, {
    created: [
      createDescription, {
        success: [],
        error: [showSnackbar('Cannot create description!')]
      }
    ],
    updated: [
      updateDescription, {
        success: [],
        error: [showSnackbar('Cannot update description!')]
      }
    ]
  },
  resetNewDescriptionFields,
  set('state:/courses.isSavingDescription', false),
  showSnackbar('Description saved')
];
