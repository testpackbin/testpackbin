import React from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import styles from './styles.css';
import TestCodeMirror from 'common/components/CodeMirror';

require('codemirror/mode/javascript/javascript');

class TestEdit extends React.Component {
  constructor() {
    super();
    this.state = {
      code: '// Code'
    }
 //   this.state = {visible: false};
  }

  updateCode(newCode) {
    this.setState({
      code: newCode
    });
  }

  render() {
    var options = {
      lineNumbers: true
    }
    return (
      <div>
        <TestCodeMirror></TestCodeMirror>
      </div>
    );
  }
}

export default TestEdit;
