import React from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import ToolbarContent from '../ToolbarContent';
import styles from './styles.css';
import BinTestUpload from 'components/BinTestUpload';
import BinReadMe from 'components/BinReadMe';
import Toolbar from 'common/components/Toolbar';
import BinForm from 'components/BinForm';
import BinUpload from 'components/BinUpload';

@Cerebral({
  courses: 'user.user.courses'
})
class BinEdit extends React.Component {
  constructor() {
    super();
    this.state = {visible: false};
  }
  render() {
      return (
        <div className={styles.wrapper}>
          <Toolbar>
            <ToolbarContent />
          </Toolbar>
          <div className={styles.contentWrapper}>
            <div className={styles.formWrapper}>
              <div className={styles.titleHead}>CREATE COURSE</div>
              <BinForm />
            </div>
          </div>
       </div>
     );
  }
}

export default BinEdit;
