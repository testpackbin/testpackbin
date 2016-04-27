import React from 'react';
import AceEditor from 'react-ace';
import brace from 'brace';
import style from './style.css';
import {Decorator as Cerebral} from 'cerebral-view-react';

import 'brace/mode/javascript';
import 'brace/theme/monokai';

@Cerebral({
  bin: "admin.bin"
})
class CodeEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  updateCode(newCode) {
    console.log(`Updating code with ${newCode}`)
  }

  onLoad(editor) {
    console.log('Editor', editor);
  }

  render() {
    return (
      <div>
        <div className={style.container}>
          <h1>Edit Tests</h1>

          <div className={style.sixColumn}>
            <h3>spec.js</h3>

            <AceEditor
              mode="javascript"
              height="600px"
              theme="monokai"
              name="spec"
              value={this.props.bin ?
              this.props.bin.tests[0].content : ""}
            />
          </div>

          <div className={style.sixColumn}>
            <h3>index.html</h3>

            <AceEditor
              mode="javascript"
              height="600px"
              theme="monokai"
              name="index"
            />
          </div>

        </div>

        <button>Save</button>
        <button>Cancel</button>
      </div>
    )
  }
}

function onLoad(editor) {
  console.log('Loaded')
}

export default CodeEditor;
