import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import authenticationReducer from './authenticationReducer';
export default combineReducers({
 simpleReducer,
 authenticationReducer
});