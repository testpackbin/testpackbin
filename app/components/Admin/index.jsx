import React from 'react'
import {Decorator as Cerebral} from 'cerebral-view-react';

let ToolbarContent = null;
let Toolbar = null;
let styles = null;
let CoursesList = null;


@Cerebral({
  admin: 'user.user.admin',
  isLoading: 'admin.isLoading'
})

class Admin extends React.Component {
  constructor(){
    super();
    this.state = {
      canRender: false
    };
  }
  componentDidMount() {
    require.ensure([], (require) => {
      Toolbar = require('common/components/Toolbar').default;
      ToolbarContent = require('../ToolbarContent').default;
      CoursesList = require('../CoursesList').default;
      styles = require('./styles.css');
      this.setState({
        canRender: true
      });
    });
  }
  render() {
    return(
      <div>
    <button> Add Course </button><br />
    <br />
    <button> Edit Course </button><br />
    <br />
    <button> Delete Course </button>
    </div>
  );
    }
  }
export default Admin;
