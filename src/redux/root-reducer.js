import { combineReducers } from 'redux';
import apiDataReducer from './api/api.reducer';

const rootReducer = combineReducers({
  apiData: apiDataReducer
});

export default rootReducer;
