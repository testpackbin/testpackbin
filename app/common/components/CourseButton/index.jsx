import React from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import styles from './styles.css';


class CourseButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = {visible : true};
  }

  render() {

    return (
      <div key={this.props.index} className={styles.courseWrapper}>
        <div className={styles.header}>
          <span>{this.props.course.name}</span>
          <button onClick={() => this.setState({visible:!this.state.visible})}>More Details</button>
          <div style={{display: this.state.visible ? 'none' : 'block'}}>Details...</div>
        </div>
      </div>
    );
  }
}

export default CourseButton;
