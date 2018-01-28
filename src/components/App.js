import React from 'react';
import MoviesList from './MoviesList';
import MoviesListFilters from './MoviesListFilters';
import '../styles/App.css';



const App = () => (
<div>
    <h1>This is home component(app.js)</h1>
    <MoviesListFilters />
    <MoviesList />
    </div>
)


export default App;
