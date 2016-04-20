import React from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import ToolbarContent from '../ToolbarContent';
import styles from './styles.css';
import Toolbar from 'common/components/Toolbar';
import BinForm from 'components/BinForm';


@Cerebral({
  courses: 'user.user.courses'
})
class BinEdit extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
      return (
        <div className={styles.wrapper}>
          <Toolbar>
            <ToolbarContent />
          </Toolbar>
          <div className={styles.contentWrapper}>
            <BinForm />
          </div>
       </div>
     );
  }
}

export default BinEdit;