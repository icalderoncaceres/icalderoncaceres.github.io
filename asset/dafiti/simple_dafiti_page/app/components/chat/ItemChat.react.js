/* Import default */
import React from 'react';

/* Class */
class ItemChat extends React.Component {
  /* Constructor */
  constructor() {
    //Super
    super();
  }

  /* Render */
  render() {
    var item = this.props.info;
    return (<div className="column item-chat-last">
      <article className="media">
        {/* <figure className="media-left">
          <p className="image is-64x64">
            <img src={item.img}/>
          </p>
        </figure> */}
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{item.id}</strong>
              <small></small>
              <small> {item.last_message.timestamp}</small>
              <br/>
              <small><i className="fa fa-check"></i></small> {item.last_message.text}
            </p>
          </div>

        </div>
        <div className="media-right">
          <button className="delete"></button>
        </div>
      </article>
    </div>);
  }
}

//Export default
export default ItemChat;
