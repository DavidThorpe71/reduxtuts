import { combineReducers } from 'redux';
import message from './message';
import movies from './movies';

const rootReducer = combineReducers({
    message,
    movies
});

export default rootReducer;
