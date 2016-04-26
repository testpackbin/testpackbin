import React from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import ToolbarContent from '../ToolbarContent';
import styles from './styles.css';
import BinReadMe from 'components/BinReadMe';
import Toolbar from 'common/components/Toolbar';
import BinForm from 'components/BinForm';
import BinUpload from 'components/BinUpload';

class BinEdit extends React.Component {
  constructor() {
    super();
 //   this.state = {visible: false};
  }
  render() {
      return (
        <div className={styles.wrapper}>
          <Toolbar>
            <ToolbarContent />
          </Toolbar>
          <div className={styles.contentWrapper}>
            <BinForm/>
            <hr/>
            <BinUpload type="bin"/>
            <hr/>
            <BinUpload type="test"/>
            <hr/>           
            <BinReadMe />
          </div>
       </div>
     );
  }
}

export default BinEdit;
