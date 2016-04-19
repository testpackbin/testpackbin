import React, { Component } from 'react'
class EditCourse extends Component {
  constructor(props){
    super(props);

    this.state = {name: '', readme:'', subject:''};

    //search function for course.
    courseSearch({name:'', lesson:'', readme:''}, (courseName) => {
      this.setState = ({name: courseName})
    }

  render(){
    return(
  <div>
  Find Course: <input type="text" name="lesson" />
  Edit Course: <input type="file" name="md"/>
  </div>
)
}
}

export default EditCourse;
