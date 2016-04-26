import opened from './signals/opened';
import binEditOpened from './signals/binEditOpened';
import formSubmitted from './signals/formSubmitted';
import inputChange from './signals/inputChange';

import removeItemClicked from './signals/removeItemClicked';

export default () => {
  return (module) => {
    module.addState({
      binForm: {
        name: '',
        id: '',
        sub: '',
        description: ''
      },
      bin: null,
      users: []
    });

    module.addSignals({
      opened,
      binEditOpened,
      formSubmitted,
      inputChange: {
        chain: inputChange
      },
      binEditOpened,
      removeItemClicked
    });
  };
};
