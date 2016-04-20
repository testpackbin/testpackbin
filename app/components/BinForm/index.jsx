import React from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import style from './styles.css';
import Add from 'react-icons/lib/md/add-box';
import AngleLeft from 'react-icons/lib/fa/angle-left';
import AngleRight from 'react-icons/lib/fa/angle-right';

class BinForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={style.wrapper}>
        <form className={style.formWrapper}>
          <AngleLeft className={style.arrow}/>NEW BIN /<AngleRight className={style.arrow}/>
          <input type="text" placeholder="Bin Name..."/>
          <input type="text" placeholder="Description..."/>
          <input type="text" placeholder="Overview..."/>
          <button type="submit" className={style.submitButton}><Add className={style.addIcon}/>Add Bin</button>
        </form>
      </div>
    );
  }
}

export default BinForm;
