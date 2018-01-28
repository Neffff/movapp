import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import {moviesList, visibilityFilter, getVisibleMovies} from './reducers/reducers';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import MovieMore from './components/MovieMore';
import {createBrowserHistory} from 'history';
import {compose} from 'redux';
import {connectRouter, routerMiddleware} from 'connected-react-router';
import {Route, Switch} from 'react-router';
import {ConnectedRouter} from 'connected-react-router';
import {connect} from 'react-redux';
const history = createBrowserHistory()

const moviesApp = combineReducers({moviesList, visibilityFilter});

const store = createStore(connectRouter(history)(moviesApp), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), compose(applyMiddleware(routerMiddleware(history), ReduxThunk),));

const state = store.getState();
const visibleMovies = getVisibleMovies(state.items, visibilityFilter);

ReactDOM.render(
    <Provider store={store}>
    <ConnectedRouter history={history}>
        <div>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route name="movie" path='/:id' component={MovieMore}/>
            </Switch>
        </div>
    </ConnectedRouter>
</Provider>, document.getElementById('root'));
registerServiceWorker();
