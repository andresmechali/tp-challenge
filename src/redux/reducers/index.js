import { combineReducers } from 'redux';
import reviewReducer from './reviewReducer';

export default combineReducers({
  review: reviewReducer,
});
