/* import dependencies */
import React from 'react';

/* class */
class ChatSearch extends React.Component {

  /* first enter */
  constructor() {
    super();
  }

  /* render */
  render() {
    return (<div className="column chat-search-ls">
      <div className="field">
        <div className="control has-icons-right">
          <input className="input" type="text" placeholder="Enter text to search"/>

          <span className="icon is-small is-right">
            <i className="fas fa-search"></i>
          </span>
        </div>
      </div>
    </div>)
  }
}

/* export default */
export default ChatSearch;
