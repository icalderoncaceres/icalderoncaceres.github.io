/* import dependencies */
import React from 'react';
import ItemLogin from '../../components/login/ItemLogin.react';

/* class container */
class LoginContainer extends React.Component {

  /* render item */
  render() {
    return (
      <div id="_login_itm" className="container">
        <ItemLogin />
      </div>
    );
  }
}

/* extends */
export default LoginContainer;
