import opened from './signals/opened';
import binEditOpened from './signals/binEditOpened';
import showUsersClicked from './signals/showUsersClicked';

export default () => {
  return (module) => {
    module.addState({
      admin: {},
      users: []
    });

    module.addSignals({
      opened,
      binEditOpened
      showUsersClicked
    });
  };
};
