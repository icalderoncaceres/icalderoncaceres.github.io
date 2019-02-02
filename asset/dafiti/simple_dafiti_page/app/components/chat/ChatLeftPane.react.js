/* import dependencies  */
import React from 'react';

/* Import components */
import ChatHeader from './ChatHeader.react';
import ChatSearch from './ChatSearch.react';
import ChatList from './ChatList.react';

/* class */
class ChatLeftPane extends React.Component {
  /* parent */
  constructor() {
    /* super */
    super();
  }

  /* render */
  render(){
    return (
      <div className="column is-4 left-pane-content">
        <ChatHeader />
        <ChatSearch />
        <ChatList />
      </div>
    );
  }
}

/* extends */
export default ChatLeftPane;
