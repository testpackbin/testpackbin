import React from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import ToolbarButton from 'common/components/ToolbarButton';
import ToolbarButtonPopover from 'common/components/ToolbarButtonPopover';
import ToolbarTitle from 'common/components/ToolbarTitle';
import icons from 'common/icons.css';
import styles from './styles.css';

@Cerebral({

})
class ToolbarContent extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <ToolbarTitle title="Course"/>
        <ToolbarButton
          icon={icons.addFile}
          onClick={() => {}}
          title={'Ben'}
          show={false}>
        </ToolbarButton>
        <ToolbarButtonPopover
          icon={icons.addAssignment}
          onClick={() => {}}
          show={false}>
        </ToolbarButtonPopover>
      </div>
    );
  }
}

export default ToolbarContent;
