import React from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import styles from './styles.css';
import Save from 'react-icons/lib/md/save';

class BinReadMe extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.wrapper}>
        <div>README</div><br/>

      <form>
          <input type="file" name="upload"/>
      </form>
        <div style={{float: "right", marginTop: "10px"}}><button className={styles.button} type="button"><Save className={styles.icon}/> Save</button></div>
      </div>
    );
  }
}

export default BinReadMe;
