/* use ACtions  */
import ChatApi from '../../api/ChatApi';
import { LOAD_CHAT_SUCCESS } from '../../constants/ActionTypes';

const chatApi = new ChatApi();

/* const get all chats  */
const getAllChats = (chats) => {
  return {
    type: LOAD_CHAT_SUCCESS,
    chats
  };
};

/* export action */
export const loadChats = () => {

  return (dispatch) =>{
    console.log('im enter');

    return chatApi.fetchAllChats((getChats, err)=>{
      if(!err){
        dispatch(getAllChats(getChats))
      }else{
        throw(err)
        dispatch(getAllChats([]));
      }
    });
  }
}
