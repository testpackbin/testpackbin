import set from 'cerebral-addons/set';
import copy from 'cerebral-addons/copy';
import login from '../actions/login';
import saveUser from '../actions/saveUser';
import redirectToCourses from '../actions/redirectToCourses';

export default [
  set('state:/home.isLoggingIn', true),
  set('state:/home.loginErrorMessage', null),
  login, {
    success: [
      saveUser,
      redirectToCourses
    ],
    error: [
      set('state:/home.loginErrorMessage', 'Log in failed! Have you entered the correct email and password?')
    ]
  },
  set('state:/home.isLoggingIn', false)
];
