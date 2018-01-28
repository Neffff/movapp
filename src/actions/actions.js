import {URL_LIST,URL_SEARCH, URL_DETAIL, API_KEY, API_KEY_ALT} from '../const';
export const REQUEST_MOVIES = 'REQUEST_MOVIES';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const SEARCH_MOVIE = 'SEARCH_MOVIE';
export const SEARCH_MOVIE_SUCCESS = 'SEARCH_MOVIE_SUCCESS';
export const SEARCH_MOVIE_FAILURE = 'SEARCH_MOVIE_FAILURE';

export const setVisibilityFilter = filter => {
  return {
      type: SET_VISIBILITY_FILTER,
      filter
  };
};

function searchMovie(value) {
  return {
    type: SEARCH_MOVIE,
    value
  };
}

function searchMovieSuccess(data, keyword) {
  return {
    type: SEARCH_MOVIE_SUCCESS,
    data,
    keyword
  };
}

function searchMovieFailed(error) {
  return {
    type: SEARCH_MOVIE_FAILURE,
    error
  };
}

function requestMovies() {
    return {
      type: REQUEST_MOVIES
    };
  }
  function fetchMoviesSuccess(data) {
    return {
      type: FETCH_MOVIES_SUCCESS,
      data
    };
  }
  function fetchMoviesFail(error) {
    return {
      type: FETCH_MOVIES_FAILURE,
      error
    };
  }

  export function searchMovieList(keyword){
    let url = URL_SEARCH + keyword + API_KEY_ALT;
    return function(dispatch){
      dispatch(searchMovie())
      return fetch(url)
        .then(response => response.json())
        .then(json => json.results)
        .then(data => dispatch(searchMovieSuccess(data,keyword)))
        .catch(error => dispatch(searchMovieFailed(error)))
    }
  }

  export function fetchMovieList(){
    let url = URL_LIST + API_KEY;
    return function(dispatch){
      dispatch(requestMovies());
      return fetch(url)
        .then(response => response.json())
        .then(json => json.results)
        .then(data => dispatch(fetchMoviesSuccess(data)))
        .catch(error => dispatch(fetchMoviesFail(error)))
    }
  }