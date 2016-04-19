import React from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import styles from './styles.css';
import DownArrow from 'react-icons/lib/fa/caret-down';
import UpArrow from 'react-icons/lib/fa/caret-up';
import Start from 'react-icons/lib/md/open-in-new';
import Refresh from 'react-icons/lib/md/redo';
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

class CourseButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = {visible : true};
  }
  render() {

    return (
      <div key={this.props.index} className={styles.courseWrapper}>

        <div className={styles.header} onClick={() => this.setState({visible:!this.state.visible})}>
          <span className={styles.title}>{this.props.course.courseId.id}</span>
          <span className={styles.showMore} >{(this.state.visible)?<DownArrow className={styles.arrows}/>:<UpArrow className={styles.arrows}/>}</span>
        </div>
        <div style={{display: this.state.visible ? 'none' : 'block'}}>
          <p>{this.props.course.courseId.readme}</p>
          <div className={styles.buttonLinks}>
            <a className={styles.newBin} href={this.props.links.courseLink}><Start className={styles.iconGrey}/>New Bin</a>
            {(this.props.links.binLink)? <a className={styles.continue} href={this.props.links.binLink}><Refresh className={styles.iconGrey}/>Continue</a> : ''}
          </div>
        </div>
      </div>
    );
  }
}

export default CourseButton;

  // <a href={this.props.links.binLink}><Refresh className={styles.iconGrey}/>Continue</a>
