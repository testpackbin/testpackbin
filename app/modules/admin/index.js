import opened from './signals/opened';
import binEditOpened from './signals/binEditOpened';
import showUsersClicked from './signals/showUsersClicked';
import binEditClicked from './signals/binEditClicked';
import removeItemClicked from './signals/removeItemClicked';

export default () => {
  return (module) => {
    module.addState({
      users: []
    });

    module.addSignals({
      opened,
      binEditClicked,
      binEditOpened,
      showUsersClicked,
      removeItemClicked
    });
  };
};
