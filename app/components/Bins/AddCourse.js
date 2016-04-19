import React, { Component } from 'react'

class AddCourse extends Component{
  constructor(props){
    super(props);

    this.state = {name: '', readme:'', subject:''}
  }
  render() {
    return (
      <div>
      Lesson name:<input value={this.state.lesson} onChange={(event) => this.setState({lesson:event.target.value})} type="text" name="lesson" /><br />
      Read Me:<input value={this.state.readme} onChange={(event) => this.setState({readme:event.target.value})} type="file" name="readme" /><br />
      Subject:<input value={this.state.subject} onChange={(event) => this.setState({subject:event.target.value})} type="text" name="subject" /><br />
      <button value={this.state}> Add Course </button>
    </div>
    );
}
}

export default AddCourse;
