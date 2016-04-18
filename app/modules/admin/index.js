import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import AddCourse from './components/Bins/AddCourse';
// import EditCourse from './components/Bins/EditCourse';
import DeleteCourse from './components/Bins/DeleteCourse';
import AddUser from './components/Users/AddUser';
import EditUser from './components/Users/EditUser';
import DeleteUser from './components/Users/DeleteUser';

//Component
class App extends Component {
  render() {
  return (
    <div>
    <AddCourse />
    </div>
    );
  }
}

//Render onto Index.html by selecting the cotainer div via querySelector
ReactDOM.render(<App />, document.querySelector('.container'));
