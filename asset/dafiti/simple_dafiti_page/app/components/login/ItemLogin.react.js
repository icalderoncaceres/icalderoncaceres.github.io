/* import react */
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {doLogin} from '../../actions/session/SessionActions';

/* class */
class Login extends React.Component {

  static propTypes = {
    doLogin: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    exist: PropTypes.bool.isRequired
  }

  /* constructore */
  constructor() {
    /* super */
    super();

    this.state = {
      email: ''
    }
  }

  _handleChange(e){
    this.setState({email: e.target.value});
  }

  _login(){
    this.props.doLogin(this.state.email);
  }


  /* render */
  render() {

    let _alert;
    if(this.props.code == 999){
       _alert = (<div className="asd">No se logueo {this.props.email}</div>)
    }

    /* return */
    return (<div className="login_content column is-6 is-offset-3">

      <div className="field">
        <p className="control has-icons-left has-icons-right">
          <input className="input" type="email" placeholder="Email" value={this.state.email} onChange={this._handleChange.bind(this)}/>
          <span className="icon is-small is-left">
            <i className="fas fa-envelope"></i>
          </span>
          <span className="icon is-small is-right">
            <i className="fas fa-check"></i>
          </span>
        </p>
      </div>
      <div className="field">
        <p className="control has-icons-left">
          <input className="input" type="password" placeholder="Password"/>
          <span className="icon is-small is-left">
            <i className="fas fa-lock"></i>
          </span>
        </p>
        {_alert}
      </div>
      <div className="field">
        <p className="control">
          <button className="button is-success is-12 column" onClick={this._login.bind(this)}>
            Login
          </button>
        </p>
      </div>
    </div>);
  }
}

/* maps to pospr */
const mapStop = (state, ownProps) => {
  return {doLogin: doLogin};
}
const mapStatetoProp = (state) => {
    var { name , email, isAuthenticated, code} = state.main.session;
    return {name: name, email: email, exist: isAuthenticated, code: code};
}

/* return */
export default connect(mapStatetoProp, mapStop())(Login);
