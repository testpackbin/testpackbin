import React from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import ToolbarContent from '../ToolbarContent';
import styles from './styles.css';
import Toolbar from 'common/components/Toolbar';
import BinForm from 'components/BinForm';
import Edit from 'react-icons/lib/md/edit';

@Cerebral({
    jwt: 'session.jwt',
    userId: 'user.user._id',
    bin: "admin.bin"
})

class BinEdit extends React.Component {
  constructor() {
    super();
  }
  render() {
      return (
        <div className={styles.wrapper}>
          <Toolbar>
            <ToolbarContent />
          </Toolbar>
          <div className={styles.formWrapper}>
            <div className={styles.titleHead}>CREATE COURSE</div>
            <BinForm />
            
            <button
              className={styles.Button}
              type="submit"
              onClick={() => this.props.signals.admin.testEditOpened()}>
              <Edit className={styles.icon}/>
              Add new test
            </button>
            <button
              className={styles.Button}
              type="submit"
              onClick={() => location.href=`http://www.webpackbin.dev:4000/${this.props.bin.id}?jwt=${this.props.jwt}&user=${this.props.userId}`}>
              <Edit className={styles.icon}/>
              Edit bin in webpack
            </button>
          </div>
       </div>
     );
  }
}

export default BinEdit;
