import React from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import styles from './styles.css';
import CourseButton from 'common/components/CourseButton';
import Edit from 'react-icons/lib/md/edit';
import Remove from 'react-icons/lib/md/highlight-remove';
import NewBin from 'react-icons/lib/md/create-new-folder';

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
        {(this.props.isAdmin)?
          <div className={styles.titleHead}>COURSES</div>
        :""}
        {this.props.courses.map((course, index) => {
          const links = {
            binLink: (course.binId) ? `http://www.webpackbin.dev:4000/${course.binId.id}?jwt=${this.props.jwt}&user=${this.props.userId}`: '',
            courseLink: `http://www.webpackbin.dev:4000/${course.courseId.id}?jwt=${this.props.jwt}&user=${this.props.userId}`
          }
          return (
            <div>
             <CourseButton key={index} course={course} links={links} index={index}/>
             {(this.props.isAdmin)?
               <div className={styles.buttonLinks}>
                 <button className={styles.Button} onClick={() => this.props.signals.admin.binEditOpened({id:course.courseId._id})}><Edit className={styles.icon}/>Edit</button>
                 <button className={styles.Button} onClick={() => this.props.signals.admin.removeItemClicked({item: 'course', index: index, id: course._id})}><Remove className={styles.icon}/>Remove</button>
               </div>
             :""}
           </div>
          )
        })
      }
      <button className={styles.Button} type="submit" onClick={() => this.props.signals.admin.binEditOpened({id:""})}><NewBin className={styles.iconNewBin}/> Add New Bin</button>
      </div>
    );
  }
}

export default CoursesList;
