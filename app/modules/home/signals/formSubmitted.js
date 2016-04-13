import set from 'cerebral-addons/set';
import registerSignup from './../actions/registerSignup.js';
import showSnackbar from 'common/factories/actions/showSnackbar.js';
import redirect from 'common/factories/actions/redirect';
import setUser from 'common/actions/setUser';

export default [
  set('state:/home.showSigningupLoader', true),
  registerSignup, {
    success: [
      setUser,
      redirect( '/courses' )
    ],
    error: [
      showSnackbar('Failed to register your email')
    ]
  }
];
