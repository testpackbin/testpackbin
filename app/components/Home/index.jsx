import React from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import AngleLeft from 'react-icons/lib/fa/angle-left';
import AngleRight from 'react-icons/lib/fa/angle-right';

let elements = null;

import styles from './styles.css';

@Cerebral({
  assignmentsSolved: 'user.assignmentsSolved',
  loginErrorMessage: 'home.loginErrorMessage',
  registerErrorMessage: 'home.registerErrorMessage',
  isLoggingIn: 'home.isLoggingIn',
  isRegistering: 'home.isRegistering'
})
class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      canRender: false
    };
  }
  componentDidMount() {
    require.ensure([], (require) => {
      elements = require('common/elements.css');

      this.setState({
        canRender: true
      });
    });
  }
  renderErrorMessage(message) {
    return (
      <div className={styles.errorMessage}>
        {message}
      </div>
    );
  }
  onInputChange(form, type, value) {
    this.props.signals.home.inputChange({form: form, type: type, value: value});
  }
  renderButtons() {
    return (
      <div className={styles.columnWrapper}>
        {/*<div className={styles.column}>
          <div className={styles.columnContent}>
            <h2 className={styles.columnTitle}>TestPack Bin</h2>
            <p>Information about our app should go here. </p>
            <p>Even more information about our app should go here.</p>
          </div>
        </div>*/}
        <div className={styles.column}>
          <div className={styles.columnContent}>
            <h2 className={styles.columnTitle}>Login</h2>
            <form onSubmit={(e) => {
              e.preventDefault();
              this.props.signals.home.loginFormSubmitted();
            }}>
              <input
                className={`${elements.input} ${styles.input}`}
                placeholder="Email"
                required
                type="email"
                onChange={(e) => this.onInputChange('loginForm', 'email', e.target.value)}/>
              <input
                className={`${elements.input} ${styles.input}`}
                placeholder="Password"
                required
                type="password"
                onChange={(e) => this.onInputChange('loginForm', 'password', e.target.value)}/>
              <button className={styles.submitButtonLogin} type="submit" disabled={this.props.isLoggingIn}>Log me in!</button>
            </form>
            {this.props.loginErrorMessage ? this.renderErrorMessage(this.props.loginErrorMessage) : null}
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.columnContent}>
            <h2 className={styles.columnTitle}>Signup</h2>
            <form onSubmit={(e) => {
              e.preventDefault();
              this.props.signals.home.registerFormSubmitted();
            }}>
              <input
                className={`${elements.input} ${styles.input}`}
                placeholder="Email"
                required
                onChange={(e) => this.onInputChange('registerForm', 'email', e.target.value)}/>
              <input
                className={`${elements.input} ${styles.input}`}
                placeholder="Password"
                required
                type="password"
                onChange={(e) => this.onInputChange('registerForm', 'password', e.target.value)}/>
              <input
                className={`${elements.input} ${styles.input}`}
                placeholder="Repeat password"
                required
                type="password"
                onChange={(e) => this.onInputChange('registerForm', 'repeatedPassword', e.target.value)}/>
              <button className={styles.submitButton} type="submit" disabled={this.props.isRegistering}>Sign me up!</button>
            </form>
            {this.props.registerErrorMessage ? this.renderErrorMessage(this.props.registerErrorMessage) : null}
          </div>
        </div>
      </div>
    );
  }
  render() {
    if (this.state.canRender) {
      return (
        <div className={styles.wrapper}>
          <div className={styles.container}>
            {/*<div className={styles.logo}></div>*/}
            <div className={styles.logo}><AngleLeft className={styles.arrow}/>TESTPACKBIN /<AngleRight className={styles.arrow}/></div>
            <h1>Welcome</h1>
            {this.renderButtons()}
          </div>
        </div>
      );
    }

    return null;
  }
}

export default Home;
