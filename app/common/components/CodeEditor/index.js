import React from 'react';
import AceEditor from 'react-ace';
import brace from 'brace';
import style from './style.css';
import {Decorator as Cerebral} from 'cerebral-view-react';
import Save from 'react-icons/lib/md/save';
import Cancel from 'react-icons/lib/ti/cancel';

import 'brace/mode/javascript';
import 'brace/theme/testPackBin';

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
    console.log('Loaded with', editor);
    editor.value = this.props.bin ? this.props.bin.tests[0].content : "";
  }

  render() {
    return (
      <div>
        <div className={style.titleHead}>Edit Tests</div>
        <div className={style.container}>
          <div className={style.sixColumn}>
            <h3>spec.js</h3>

            <AceEditor
              mode="javascript"
              height="600px"
              theme="monokai"
              name="spec"
              onLoad={this.onLoad.bind(this)}
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

        {/*<button
         type="submit"
        >Save</button>
        <button>Cancel</button>*/}
        <div className={style.buttons}>
          <span className={style.iconButton}><Save className={style.icon}/> Save</span>
          <span className={style.iconButton}><Cancel className={style.icon}/> Cancel </span>
        </div>
      </div>
    )
  }
}

function onLoad(editor) {
  console.log('Loaded')
}

export default CodeEditor;
