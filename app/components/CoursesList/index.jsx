import React from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import styles from './styles.css';
import CourseButton from 'common/components/CourseButton'

@Cerebral({
  courses: 'courses.courses',
})
class CoursesList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.courses.map((course, index) => {return <CourseButton course={course} index={index}/>})}
      </div>
    );
  }
}

export default CoursesList;
