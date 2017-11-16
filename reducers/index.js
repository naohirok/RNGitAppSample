import { combineReducers } from 'redux';
import GitReducer from './gitReducer.js';
import ActiveReducer from './activeReducer.js';

const allReducers = combineReducers({
    repos: GitReducer,
    activeRepo: ActiveReducer
});

export default allReducers;
