import React from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import styles from './styles.css';
import BinTestUpload from 'components/BinTestUpload';
import BinReadMe from 'components/BinReadMe';


class BinUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
    <div>
        Bin:<input type="file"/><br />
        <BinTestUpload />
        <BinReadMe />
        </div>
    );
  }
}

export default BinUpload;
