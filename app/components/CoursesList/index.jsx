import React from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import styles from './styles.css';
import CourseButton from 'common/components/CourseButton'

@Cerebral({
  jwt: 'session.jwt',
  userId: 'user.user._id',
  courses: 'courses.courses'
})
class CoursesList extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className={styles.wrapper}>
        {this.props.courses.map((course, index) => {
          let links ={
            binLink: (course.binId) ? `http://www.webpackbin.dev:4000?${course.id}?jwt=${this.props.jwt}&user=${this.props.userId}`: '',
            courseLink: `http://www.webpackbin.dev:4000/${course.id}?jwt=${this.props.jwt}&user=${this.props.userId}`
          }
          return <CourseButton key={index} course={course} links={links} index={index}/>})}

      </div>
    );
  }
}

export default CoursesList;
