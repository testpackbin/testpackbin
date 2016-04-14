import opened from './signals/opened';
import appClicked from './signals/appClicked';


export default () => {
  return (module) => {
    module.addState({
      courses: []
    });

    module.addSignals({
      opened,
      appClicked
    });
  };
};
