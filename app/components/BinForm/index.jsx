import React from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import style from './styles.css'
// import AngleLeft from 'react-icons/lib/fa/angle-left';
// import AngleRight from 'react-icons/lib/fa/angle-right';
import Add from 'react-icons/lib/md/add-circle';

@Cerebral({

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
          <span className={style.title}>CREATE COURSE</span>
          <input
            type="text"
            placeholder="Course Name"
            required
            focus
            ref="nameInput"
            onChange={(e) => this.onInputChange('binForm', 'name', e.target.value)}
          />
          <input
            type="text"
            placeholder="courseId (camel case, no spaces)"
            required
            onChange={(e) => this.onInputChange('binForm', 'id', e.target.value)}
          />
          <input
            type="text"
            placeholder="Subject (i.e. Javascript)"
            required
            onChange={(e) => this.onInputChange('binForm', 'sub', e.target.value)}
          />
          <input
            type="text"
            placeholder="Description"
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
