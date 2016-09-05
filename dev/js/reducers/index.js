import {combineReducers} from 'redux';
import UserReducer from './reducer-users';
import ActiveUser from './reducer-active-users';

const allReducers = combineReducers({
  users: UserReducer,
  activeUser: ActiveUser
});

export default allReducers;
