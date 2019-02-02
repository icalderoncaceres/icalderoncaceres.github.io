/* chat reducer */
import * as ActionTypes from '../../constants/ActionTypes';
import initialState from './initialState';
/* export reducer */
export default  (state = initialState, action) => {
  /* root redure */
  switch (action.type) {
    case ActionTypes.LOAD_CHAT_SUCCESS:
      return  {...state, list: action.chats};
      break;
    default:
      return state;
  }
}
