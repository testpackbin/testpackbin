import opened from './signals/opened';
import appClicked from './signals/appClicked';
import expandCard from './signals/expandCard';
import collapseCard from './signals/collapseCard';



export default () => {
  return (module) => {
    module.addState({
      courses: [],
      display: 'none',
      displayNone: 'block'
    });

    module.addSignals({
      opened,
      appClicked,
      expandCard,
      collapseCard
    });
  };
};
