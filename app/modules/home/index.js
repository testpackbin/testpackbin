import opened from './signals/opened';
import startCourseClicked from './signals/startCourseClicked';
import restartCourseClicked from './signals/restartCourseClicked';
import continueCourseClicked from './signals/continueCourseClicked';
import registerFormSubmitted from './signals/registerFormSubmitted';
import loginFormSubmitted from './signals/loginFormSubmitted';
import inputChange from './signals/inputChange';

export default () => {
  return (module) => {
    module.addState({
      isLoggingIn: false,
      isRegistering: false,
      hasRegistered: false,
      loginErrorMessage: false,
      registerErrorMessage: false,
      loginForm: {
        email: '',
        password: ''
      },
      registerForm: {
        email: '',
        password: '',
        repeatedPassword: ''
      }
    });

    module.addSignals({
      opened,
      startCourseClicked,
      restartCourseClicked,
      continueCourseClicked,
      registerFormSubmitted,
      loginFormSubmitted,
      inputChange: {
        chain: inputChange,
        sync: true
      }
    });
  };
};
