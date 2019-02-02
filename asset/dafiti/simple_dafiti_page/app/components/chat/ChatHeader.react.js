/* import dependencies */
import React from 'react';

/* create class */
class ChatHeader extends React.Component {
  /* parent */
  constructor() {
    super();
  }

  /* Render return */
  render() {
    return (<div className="column is-narrow chat-header-ls">
      <article className="media">
        <figure className="media-left">
          <p className="image is-48x48">
            <img src={global.conf.mediaApi + "img/profile_1.jpg"} className="img-rounded"/>
          </p>
        </figure>

        <div className="media-content">
          <div className="content">
            <div className="columns is-gapless">
              <div className="column is-two-thirds">
                <strong>
                  Fernando Yara
                </strong>
                <br/>
                <small >fernandoyara@keos.co</small>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>)
  }
}

/* export components */
export default ChatHeader;
