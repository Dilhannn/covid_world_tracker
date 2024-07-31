// src/redux/rootReducer.js

import { combineReducers } from 'redux';
import reducer from './reducer';

const rootReducer = combineReducers({
  data: reducer,
});

export default rootReducer;
