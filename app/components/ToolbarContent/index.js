import React from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import ToolbarButton from 'common/components/ToolbarButton';
import ToolbarButtonPopover from 'common/components/ToolbarButtonPopover';
import ToolbarTitle from 'common/components/ToolbarTitle';
import icons from 'common/icons.css';
import styles from './styles.css';
import AngleLeft from 'react-icons/lib/fa/angle-left';
import AngleRight from 'react-icons/lib/fa/angle-right';
import User from 'react-icons/lib/fa/user';
import SignOut from 'react-icons/lib/fa/sign-out';

@Cerebral({
  userId: 'user.user.username'
})
class ToolbarContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible : true,
      userId : 'user.user.username'
    };
  }
  render() {
    return (
      <div className={styles.wrapper}>
        <span className={styles.title}><AngleLeft className={styles.arrow}/>TESTPACKBIN /<AngleRight className={styles.arrow}/></span>
      <div className={styles.button} onClick={() => this.setState({visible:!this.state.visible})} onMouseLeave={() => this.setState({visible:!this.state.visible})}>
          <User className={styles.icon}/>
          {this.props.userId}
          <div style={{display: this.state.visible ? 'none' : 'block'}} >
            <ul>
              <a href="#" className={styles.logOut}><li><SignOut className={styles.icon}/> Sign out</li></a>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ToolbarContent;
