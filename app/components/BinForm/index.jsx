import React from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import style from './styles.css'
// import AngleLeft from 'react-icons/lib/fa/angle-left';
// import AngleRight from 'react-icons/lib/fa/angle-right';
import Add from 'react-icons/lib/md/add-circle';

@Cerebral({
  bin: "admin.bin"
})

// let elements = null;

class BinForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount(){
      React.findDOMNode(this.refs.nameInput).focus();
    }
  onInputChange(field, value) {
    this.props.signals.admin.inputChange({field: field, value: value});
  }
  render() {
    return (
      <div className={style.wrapper}>
        <form className={style.formWrapper} onSubmit={(e) => {
          e.preventDefault();
          this.props.signals.admin.formSubmitted();
        }}>
          <input
            type="text"
            placeholder="Bin Name"
            value={this.props.bin?this.props.bin.name:""}
            required
            focus
            ref="nameInput"
            onChange={(e) => this.onInputChange('name', e.target.value)}
          />
          <input
            type="text"
            placeholder="Bin Id (camel case, no spaces)"
            value={this.props.bin?this.props.bin.id:""}            
            required
            onChange={(e) => this.onInputChange('id', e.target.value)}
          />
          <input
            type="text"
            placeholder="Subject tag(i.e. Javascript)"
            value={this.props.bin?this.props.bin.subject:""}            
            required
            onChange={(e) => this.onInputChange('subject', e.target.value)}
          />
          <textarea
            placeholder="Description"
            rows="10"
            cols="70"
            value={this.props.bin?this.props.bin.readme:""}            
            required
            onChange={(e) => this.onInputChange('readme', e.target.value)}>
          </textarea>
        <button type="submit" className={style.submitButton}><span className={style.addIcon}><Add/></span>Save</button>
        </form>
      </div>
    );
  }
}

export default BinForm;
