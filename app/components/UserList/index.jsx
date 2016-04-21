import React from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import styles from './styles.css';

@Cerebral({
  jwt: 'session.jwt',
  userId: 'user.user._id',
  courses: 'admin.users'
})
class UserList extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className={styles.wrapper}>
        <ul>
        {this.props.users.map((user, index) => {
          return <li>
            {user.name}<button onClick={this.props.signals.admin.removeUserClicked({index: index, id: user._id})}>Remove</button>
          </li>
        })}
        </ul>
      </div>
    );
  }
}

export default UserList;

