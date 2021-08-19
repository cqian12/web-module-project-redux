import { combineReducers } from 'redux';
import favesReducer from './favesReducer'
import movieReducer from './movieReducer';

const newReducer = combineReducers({favesReducer,movieReducer})

export default newReducer;