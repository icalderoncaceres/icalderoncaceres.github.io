/* import react */
import React from 'react';
import {connect} from 'react-redux';
/* import other components */
import ChatLeftPane from '../../components/chat/ChatLeftPane.react';
import ChatContainer from '../../components/chat/ChatContainer.react';

/* action */
import {loadChats} from '../../actions/chat/ChatActions';

/* Class */
class Chat extends React.Component {
  /* Contructor react */
  constructor() {
    super();
  }

  /* component did mount */
  componentDidMount() {

    /* load success */
    this.props.loadChats();
    console.log('whaaaat');
  }

  /* render */
  render() {
    return (<section className="columns is-gapless all-app-content">
      <ChatLeftPane/>
      <ChatContainer/>
    </section>)
  }
}

/* maps to actions */

/* export default */
export default connect(null, { loadChats })(Chat);
