import React from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import styles from './styles.css';
import Remove from 'react-icons/lib/md/highlight-remove';

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
        <div className={styles.titleHead}>USERS</div>
        <ul className={styles.ul}>
        {this.props.users.map((user, index) => {
          return (
            <li className={styles.li}>
              {user.username}<button className={styles.Button} ></button><Remove onClick={() => this.props.signals.admin.removeItemClicked({item: 'user', index: index, id: user._id})} className={styles.icon}/>
            </li>
          )
        })}
        </ul>
      </div>
    );
  }
}

export default UserList;
