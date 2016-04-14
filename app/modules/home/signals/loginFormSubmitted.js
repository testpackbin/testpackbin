import set from 'cerebral-addons/set';
import login from '../actions/login';
import redirectToCourses from '../actions/redirectToCourses';
import setSessionToken from '../actions/setSessionToken';

export default [
  set('state:/home.isLoggingIn', true),
  set('state:/home.loginErrorMessage', null),
  login, {
    success: [
      setSessionToken,
      redirectToCourses
    ],
    error: [
      set('state:/home.loginErrorMessage', 'Log in failed! Have you entered the correct email and password?')
    ]
  },
  set('state:/home.isLoggingIn', false)
];
