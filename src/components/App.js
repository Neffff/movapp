import React from 'react';
import MoviesList from './MoviesList';
import MovieMore from './MovieMore';
import MoviesListFilters from './MoviesListFilters';
import '../styles/App.css';


const App = () => (
<div className="movies__app">
    <MoviesListFilters />
    <MoviesList />
      
    </div>
)

export default App;
