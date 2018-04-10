import { combineReducers } from 'redux';
import message from './message';
import movies from './movies';
import test from './test';


const rootReducer = combineReducers({
    message,
    movies,
    test
});

export default rootReducer;
