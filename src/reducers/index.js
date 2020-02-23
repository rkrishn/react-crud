import { combineReducers } from 'redux';
import merchants from './merchantReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  merchants,
  ajaxCallsInProgress,
  routing: routerReducer
});

export default rootReducer;
