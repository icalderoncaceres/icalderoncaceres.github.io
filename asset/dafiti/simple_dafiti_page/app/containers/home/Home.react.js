/* dependecies */
import React from 'react';
import { connect } from 'react-redux';
import { authFail } from '../../actions/session/SessionActions';
import { Link } from 'react-router-dom';
/* class */
class HomeContainer extends React.Component {
  componentWillMount() {
    // alert('Private home is at: ' + this.props.location.pathname)
  }

  render() {
    return (<div>
      <Link to="/test">Hola</Link>
      <button onClick={this.props.logout}>Logout Here!</button>
    </div>)
  }
}
export default connect(null, {logout: authFail})(HomeContainer);
