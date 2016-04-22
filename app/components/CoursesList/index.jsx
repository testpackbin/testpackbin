import React from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import styles from './styles.css';
import CourseButton from 'common/components/CourseButton'

@Cerebral({
  jwt: 'session.jwt',
  userId: 'user.user._id',
  courses: 'courses.courses',
  isAdmin: 'user.user.isAdmin'
})
class CoursesList extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className={styles.wrapper}>
        {this.props.courses.map((course, index) => {
          const links = {
            binLink: (course.binId) ? `http://www.webpackbin.dev:4000?${course.binId.id}?jwt=${this.props.jwt}&user=${this.props.userId}`: '',
            courseLink: `http://www.webpackbin.dev:4000/${course.courseId.id}?jwt=${this.props.jwt}&user=${this.props.userId}`
          }
          return (
            <div>
             <CourseButton key={index} course={course} links={links} index={index}/>
             {(this.props.isAdmin)?
               <div>
                 <button onClick={this.props.signals.admin.binEditClicked({id: course._id})}>Edit</button>
                 <button onClick={this.props.signals.admin.removeItemClicked({item: 'course', index: index, id: course._id})}>Remove</button>  
               </div>
             :""}
           </div>
          )  
        })
      }
      </div>
    );
  }
}

export default CoursesList;
