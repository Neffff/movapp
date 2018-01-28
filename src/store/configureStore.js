import { createStore, combineReducers } from 'redux';

export default () => {
    const store = createStore(movieList);
    return store;
};