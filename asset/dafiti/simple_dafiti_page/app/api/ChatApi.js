/* import actions */
import Server from './ServerApi';

/* class api */
class ChatApi extends Server{

  /* firt entry */
  constructor() {
    super();
  }


  /* Fetch all chat */
  fetchAllChats(success){
    this.req.get('/message/list').then((response)=>{
      success(response.data.data);
    }).catch((err)=>{
      success(null, err);
    });
  }


}

//Export default
export default ChatApi;
