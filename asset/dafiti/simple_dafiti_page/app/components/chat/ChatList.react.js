/* import react */
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as ChatActions from '../../actions/chat/ChatActions';
import ItemChat from './ItemChat.react';
import { withRouter } from 'react-router-dom';



/* class render */
class ChatList extends React.Component {
  /* constructor */
  constructor() {
    super();

    /* binding */
    this._nodeMsM = this._nodeMsM.bind(this);
  }



  /* nodelist Chats */
  _nodeMsM() {
    /* iterate */
    var _node = this.props.chatsList.map((item, i) => {
      return (<ItemChat key={i} info={item}/>)
    }, this);

    return _node;

  }

  /* render */
  render() {
    return (<div className="column list-all-chats is-paddingless">
      {this._nodeMsM()}

    </div>)
  }
}

/* declare proptypes */
ChatList.propTypes = {
  // chats: PropTypes.array
};

//
const mapStateToProps = (state, ownProps) => {
  return {chatsList: state.main.chats.list}
}

//Export default class
export default connect(mapStateToProps)(ChatList);
