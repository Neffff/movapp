import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk'
import { moviesList, visibilityFilter, getVisibleMovies } from './reducers/reducers';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const moviesApp = combineReducers({
    moviesList,
    visibilityFilter
});

const store = createStore(
        moviesApp,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        applyMiddleware(ReduxThunk)
    );

const state = store.getState();
const visibleMovies = getVisibleMovies(state.items, visibilityFilter);
console.log(visibleMovies);

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>,
document.getElementById('root'));
registerServiceWorker();
