import colorChanged from './signals/colorChanged';
import redirectRoot from './signals/redirectRoot';
import titleChanged from './signals/titleChanged';
import randomColorClicked from './signals/randomColorClicked';

export default (options = {}) => {
  return (module, controller) => {

    module.addState({
      title: 'You can change the url too!',
      color: '#333'
    });

    module.addSignals({
      titleChanged,
      colorChanged,
      redirectRoot,
      randomColorClicked
    });

  };
}
