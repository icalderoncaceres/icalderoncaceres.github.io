/* deoendencies */
import { combineReducers } from 'redux';
import chats from './chat/chatReducer';
import session from './session/SessionReducer';
import {routerReducer} from 'react-router-redux'
/* const */
const main = combineReducers({chats, session});
const _allReducer = combineReducers({routerReducer, main});

/* export default */
export default _allReducer;
