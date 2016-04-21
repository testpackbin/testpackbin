import opened from './signals/opened';
import binEditOpened from './signals/binEditOpened';
import showUsersClicked from './signals/showUsersClicked';
import removeUserClicked from './signals/removeUserClicked';

export default () => {
  return (module) => {
    module.addState({
      admin: {},
      users: []
    });

    module.addSignals({
      opened,
      binEditOpened,
      showUsersClicked,
      removeUserClicked
    });
  };
};
