import React from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import styles from './styles.css';

@Cerebral({
  users: 'admin.users'
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
          return (
            <li>
              {user.username}<button onClick={() => this.props.signals.admin.removeItemClicked({item: 'user', index: index, id: user._id})}>Remove</button>
            </li>
          )
        })}
        </ul>
      </div>
    );
  }
}

export default UserList;

