
import { combineReducers, createStore, applyMiddleware } from 'redux';
import getreduser from './getredux/getreduser';


const rootReducer = combineReducers({

  users: getreduser,
});

const store = createStore(
  rootReducer
);

export default store;
