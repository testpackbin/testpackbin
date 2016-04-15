import React from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import styles from './styles.css';
import CourseButton from 'common/components/CourseButton'

@Cerebral({
  courses: 'courses.courses',
  display: ['courses', 'display'],
  // displayNone: ['courses', 'displayNone']
})
class CoursesList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const courses = this.props.courses;
    const signals = this.props.signals.courses;
    return (

          <div >
          {courses.map((course, index) => {
            return (
              <div key={index}className={styles.courseWrapper}>
                <div className={styles.header}>
                  <span>{course.name}</span>

                </div>
                <div style={{display: this.props.display}}>
                  <div>Details...</div>
                </div>
              <CourseButton course={course}/>
              </div>
              )
            })}

      </div>

    );
  }
}

export default CoursesList;
