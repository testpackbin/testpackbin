import React from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import styles from './styles.css';


class CourseButton extends React.Component {

  constructor(props) {
    super(props);
    this.setState({visible : true});
  }

  render() {
    const courses = this.props.courses;
    let visible = this.state?this.state.visible:true;
    return (

    <div>
      <button onClick={() => {this.setState({visible:!visible}); console.log('haha:',visible)}} >More Details</button>
      <div style={{display: visible ? 'none' : 'block'}}>Ha ha</div>
    </div>


    );
  }
}

export default CourseButton;
