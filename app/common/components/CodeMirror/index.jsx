import React from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import styles from './style.css';
import CodeMirror from 'react-codemirror';
import 'codemirror/lib/codemirror.css';

require('codemirror/mode/javascript/javascript');

class TestCodeMirror extends React.Component {
  constructor() {
    super();
    this.state = {
      code: "// Code"
    }
  }

  updateCode(newCode) {
    this.setState({
      code: newCode
    })
  }

  render() {
    var options = {
      lineNumbers: true,
      mode: 'javascript',
      theme: 'abcdef'
    }
    return (
      <CodeMirror
      value = {this.state.code}
      onChange = {this.updateCode}
      options = {options}
      />
    )
  }
}

export default TestCodeMirror;
