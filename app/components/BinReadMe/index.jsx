import React from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import styles from './styles.css';

class BinReadMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        ReadMe:<input type="file"/><br />
        </div>
    );
  }
}

export default BinReadMe;
