import opened from './signals/opened';
import registerFormSubmitted from './signals/registerFormSubmitted';
import loginFormSubmitted from './signals/loginFormSubmitted';
import inputChange from './signals/inputChange';
import shortCutClicked from './signals/shortCutClicked';

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
      shortCutClicked,
      registerFormSubmitted,
      loginFormSubmitted,
      inputChange: {
        chain: inputChange,
        sync: true
      }
    });
  };
};
