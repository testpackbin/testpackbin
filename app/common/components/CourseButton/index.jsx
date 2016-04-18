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
          <span>{this.props.course.courseId.id}</span>
          <button onClick={() => this.setState({visible:!this.state.visible})}>More Details</button>
          <div style={{display: this.state.visible ? 'none' : 'block'}}>
            <button onClick={() => location.href = this.props.links.binLink}>Cont</button>
            <br/>
            <a href={this.props.links.courseLink}>Start</a>
          </div>
        </div>
      </div>
    );
  }
}

export default CourseButton;
