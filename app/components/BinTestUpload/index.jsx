import React from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import styles from './styles.css';
import AngleLeft from 'react-icons/lib/fa/angle-left';
import AngleRight from 'react-icons/lib/fa/angle-right';

class BinTestUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={styles.wrapper}>
        <AngleLeft className={styles.arrow}/>TESTS/<AngleRight className={styles.arrow}/><br/>
        <input type="file"/><br />
      </div>
    );
  }
}

export default BinTestUpload;
