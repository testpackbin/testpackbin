import opened from './signals/opened';

export default () => {
  return (module) => {
    module.addState({
      admin: {}

    });

    module.addSignals({
      opened

    });
  };
};
