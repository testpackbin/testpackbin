import createNewBin from '../actions/createNewBin';
import updateBin from '../actions/updateBin';
import when from 'cerebral-addons/when';
import showSnackbar from 'common/factories/actions/showSnackbar';
import setBin from '../actions/setBin';


export default [
   when('state:/admin.bin._id'), {
     isTrue: [
       updateBin, {
         success: [showSnackbar('Totally updated your bin!')],
         error: [showSnackbar('Error updating the bin!')]
     }],
     isFalse: [
       createNewBin, {
         success: [
           showSnackbar('Totally added new bin!'),
           setBin
       ],
         error: [showSnackbar('Error adding new bin!')]
       }
     ]
   }

];
