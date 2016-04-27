import React from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import styles from './styles.css';
import CodeEditor from 'common/components/CodeEditor';

// require('codemirror/mode/javascript/javascript');

class TestEdit extends React.Component {
  constructor() {
    super();
  }



  render() {
    var options = {
      lineNumbers: true
    }
    return (
      <div>
        <CodeEditor></CodeEditor>
      </div>
    );
  }
}

export default TestEdit;
