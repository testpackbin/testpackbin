import React from 'react'
import {Decorator as Cerebral} from 'cerebral-view-react';

let ToolbarContent = null;
let Toolbar = null;
let styles = null;
let CoursesList = null;
let UserList = null;


@Cerebral({
  templates: 'user.user.courses',
  users: 'admin.users',
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
      UserList = require('../UserList').default;
      styles = require('./styles.css');
      this.setState({
        canRender: true
      });
    });
  }
  renderCourses() {
    return (
      <div className={styles.wrapper} onClick={() => this.props.signals.courses.appClicked()}>
        <Toolbar>
          <ToolbarContent/>
        </Toolbar>
        <div className={styles.contentWrapper}>
          <CoursesList/>
        </div>
        <hr/>
        <div>
          <button onClick={() => this.props.signals.admin.showUsersClicked}>Bring Em Users</button>
        </div>
        <div>
          //<UserList/>
        </div>
      </div>
    );
  }
  render() {
    if (this.state.canRender) {
      return (
        <div>
          <div className={this.props.isLoading ? styles.overlayVisible : styles.overlay}></div>
          {this.props.isLoading ? null : this.renderCourses()}
       </div>
      );
    }

    return null;
  }
}
export default Admin;
