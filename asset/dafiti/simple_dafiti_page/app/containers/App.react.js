import React from 'react';
import {Route, Switch} from 'react-router';

/* rutes */
import PrivateRoute from './session/PrivateRoute.react';
import Login from './login/Login.react';
import Home from './home/Home.react';
import Chat from './chat/Chat.react'

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (<div id="_chat-main">

      <Switch>
        <Route path="/login" component={Login}/>
        <PrivateRoute exact={true} path="/" component={Chat}/>
        <PrivateRoute path="/test" component={Home}/>
      </Switch>
    </div>)
  }
}

/* default export */
export default App;
