import opened from './signals/opened';
import binEditOpened from './signals/binEditOpened';
import testEditOpened from './signals/testEditOpened';
import formSubmitted from './signals/formSubmitted';
import inputChange from './signals/inputChange';
import saveTests from './signals/saveTests';
import removeItemClicked from './signals/removeItemClicked';
import testCodeUpdated from './signals/testCodeUpdated';

export default () => {
  return (module) => {
    module.addState({
      bin: {
        _id: null,
        id: '',
        author: 'admin',
        isBoilerplate: true,
        readme: '',
        name: '',
        subject: '',
        packages: [],
        loaders: [],
        tests: [],
        files: []
      },
      users: []
    });

    module.addSignals({
      opened,
      binEditOpened,
      testEditOpened,
      formSubmitted,
      inputChange: {
        chain: inputChange
      },
      binEditOpened,
      removeItemClicked,
      testEditOpened,
      saveTests,
      testCodeUpdated
    });
  };
};
