import React from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import styles from './styles.css';
import AngleLeft from 'react-icons/lib/fa/angle-left';
import AngleRight from 'react-icons/lib/fa/angle-right';

class BinReadMe extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.wrapper}>
        <AngleLeft className={styles.arrow}/>README/<AngleRight className={styles.arrow}/><br/>

      <form>
        <input type="file"/>
        <button type="submit">Submit</button>
      </form>
      </div>
    );
  }
}

export default BinReadMe;
