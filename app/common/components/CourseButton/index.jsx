import React from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import styles from './styles.css';
import DownArrow from 'react-icons/lib/fa/caret-down';
import UpArrow from 'react-icons/lib/fa/caret-up';
import Start from 'react-icons/lib/md/open-in-new';
import Refresh from 'react-icons/lib/md/redo';
import Ink from 'react-ink';

class CourseButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = {visible : true};
  }
  render() {

    return (
      <div key={this.props.index} className={styles.courseWrapper}>

        <div style={{ position: "relative" }} className={styles.header} onClick={() => this.setState({visible:!this.state.visible})}>
          <Ink />
          <span className={styles.title}>{this.props.course.courseId.id}</span>
          <span className={styles.showMore} >{(this.state.visible)?<DownArrow className={styles.arrows}/>:<UpArrow className={styles.arrows}/>}</span>
        </div>
        <div style={{display: this.state.visible ? 'none' : 'block'}}>
          <p>{this.props.course.courseId.readme}</p>
          <div className={styles.buttonLinks}>
            <a className={styles.newBin} href={this.props.links.courseLink}><Start className={styles.iconGrey}/>New Bin</a>
            <a href={this.props.links.binLink}><Refresh className={styles.iconGrey}/>Continue</a>
          </div>
        </div>
      </div>
    );
  }
}

export default CourseButton;

  //{(this.props.links.binLink)? <a className={styles.continue} href={this.props.links.binLink}><Refresh className={styles.iconGrey}/>Continue</a> : ''}
  // <a href={this.props.links.binLink}><Refresh className={styles.iconGrey}/>Continue</a>
