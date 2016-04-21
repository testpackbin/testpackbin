import opened from './signals/opened';
import binEditOpened from './signals/binEditOpened';

export default () => {
  return (module) => {
    module.addState({
      admin: {},
    });

    module.addSignals({
      opened,
      binEditOpened
    });
  };
};
