import set from 'cerebral-addons/set';
import login from '../actions/login';
import redirectToLastCourse from '../actions/redirectToLastCourse';

export default [
  set('state:/home.isLoggingIn', true),
  set('state:/home.loginErrorMessage', null),
  login, {
    success: [
      redirectToLastCourse
    ],
    error: [
      set('state:/home.loginErrorMessage', 'Log in failed! Have you entered the correct email and password?')
    ]
  },
  set('state:/home.isLoggingIn', false)
];
