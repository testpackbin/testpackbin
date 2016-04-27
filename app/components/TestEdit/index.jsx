import React from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import styles from './styles.css';
import CodeEditor from 'common/components/CodeEditor';
import Toolbar from 'common/components/Toolbar';
import ToolbarContent from '../ToolbarContent';

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
        <Toolbar>
          <ToolbarContent />
        </Toolbar>
        <CodeEditor />
      </div>
    );
  }
}

export default TestEdit;
