'use strict'

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
  }

  updateCode(newCode) {
    // this.state.set('spec', newCode)
  }

  onLoad(editor) {
    let value = this.props.bin ? this.props.bin.tests[0].content : "";
    editor.setValue(value);
    this.setState({
      editor: editor
    })
  }

  updateBin() {
    let bin = {
      _id: this.props.bin._id,
      tests: [
        {
          name: "spec.js",
          content: this.state.editor.getValue()
        }
      ]
    }
    this.props.signals.admin.saveTests({bin: bin});
  }

  getSpec() {
    return this.props.bin ? this.props.bin.tests[0].content : "";
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
              // onChange={this.updateCode.bind(this)}
              onLoad={this.onLoad.bind(this)}
              value={this.props.bin.tests[0].content}
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

        <button
        type="submit"
        onClick = {() => this.updateBin()}
        >Save</button>
        <button>Cancel</button>
      </div>
    )
  }
}

function onLoad(editor) {
  console.log('Loaded')
}

export default CodeEditor;
