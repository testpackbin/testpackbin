import React from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import styles from './styles.css';

@Cerebral({
  courses: 'user.user.courses',
  jwt: 'session.jwt',
  userId: 'user._id'
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
    let link, title;
    if (course.binId) {
      link = <a
        href={`www.webpackbin.dev:4000?${course.binId.id}?jwt=${this.props.jwt}&user=${this.props.userId}`}
      >Continue {course.binId.name}</a>
    } else {
      link = ''
    }


    return this.props.courses.map((course, index) => {
      return (
        <div
          className={styles.courseWrapper}
          key={index}
          onClick={() => this.courseClicked(course)}>
            {link}
              <a href={`www.webpackbin.dev:4000/${course.courseId.id}?jwt=${this.props.jwt}&user=${this.props.userId}`}
              >Start {course.courseId.name}</a>
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
