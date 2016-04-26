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
  onInputChange(form, type, value) {
    this.props.signals.admin.inputChange({form: form, type: type, value: value});
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
            onChange={(e) => this.onInputChange('binForm', 'name', e.target.value)}
          />
          <input
            type="text"
            placeholder="Bin Id (camel case, no spaces)"
            value={this.props.bin?this.props.bin.id:""}            
            required
            onChange={(e) => this.onInputChange('binForm', 'id', e.target.value)}
          />
          <input
            type="text"
            placeholder="Subject (i.e. Javascript)"
            value={this.props.bin?this.props.bin.subject:""}            
            required
            onChange={(e) => this.onInputChange('binForm', 'sub', e.target.value)}
          />
          <input
            type="text"
            placeholder="Description"
            value={this.props.bin?this.props.bin.readme:""}            
            required
            onChange={(e) => this.onInputChange('binForm', 'description', e.target.value)}
          />
        <button type="submit" className={style.submitButton}><span className={style.addIcon}><Add/></span>Add Bin</button>
        </form>
      </div>
    );
  }
}

export default BinForm;
