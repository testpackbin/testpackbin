import React from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import styles from './styles.css';

@Cerebral({
  courses: 'courses.courses'
})
class CoursesList extends React.Component {
  constructor() {
    super();
  }
  courseClicked(course) {
    /*this.props.signals.course.opened({
      courseId: course.id.toString(),
    });*/
  }
  renderCourses() {
    return this.props.courses.map((course, index) => {
      return (
        <div
          className={styles.courseWrapper}
          key={index}
          onClick={() => this.courseClicked(course)}>
          <span className={styles.courseName}>{course.name}</span>
        </div>
      );
    });
  }
  render() {
    return (
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Bin</h1>
        <div className={styles.coursesWrapper}>
          {this.renderCourses()}
        </div>
      </div>
    );
  }
}

export default CoursesList;
