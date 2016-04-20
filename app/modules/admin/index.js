import opened from './signals/opened';
import binEditOpened from './signals/binEditOpened';
import formSubmitted from './signals/formSubmitted';
import inputChange from './signals/inputChange';

export default () => {
  return (module) => {
    module.addState({
      admin: {},
      binForm: {
        name: '',
        id: '',
        sub: '',
        description: ''
      },
    });

    module.addSignals({
      opened,
      binEditOpened,
      formSubmitted,
      inputChange: {
        chain: inputChange,
        sync: true
      }
    });
  };
};
