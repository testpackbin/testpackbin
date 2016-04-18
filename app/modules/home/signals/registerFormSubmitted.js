import set from 'cerebral-addons/set';
import register from '../actions/register';
import redirect from 'common/factories/actions/redirect';
import saveUser from '../actions/saveUser';
import setRegisterErrorMessage from '../actions/registerErrorMessage';

export default [
  set('state:/home.isRegistering', true),
  set('state:/home.registerErrorMessage', false),
  register, {
    success: [
      saveUser,
      redirect('/courses')
    ],
    error: [
      setRegisterErrorMessage
    ]
  },
  set('state:/home.isRegistering', false)
];
