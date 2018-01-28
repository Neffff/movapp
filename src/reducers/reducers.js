import {
  REQUEST_MOVIES,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  SEARCH_MOVIE,
  SEARCH_MOVIE_SUCCESS,
  SEARCH_MOVIE_FAILURE
} from '../actions/actions';

const initialState = {
  isFetching: false,
  items:[],
  error: {}
};


export const moviesList = (state = initialState, action) => {
  switch (action.type){
    case REQUEST_MOVIES:
    case FETCH_MOVIES_SUCCESS:
      return state;
    case FETCH_MOVIES_FAILURE:
    case SEARCH_MOVIE:
      return {...state, isFetching:true};
    case SEARCH_MOVIE_SUCCESS:
      return {...state, isFetching:false, items:action.data};
    case SEARCH_MOVIE_FAILURE:
      return {...state, isFetching:false, error:action.data};
    default:
    return state;
  }
}


export const getVisibleMovies = (movies, filter) => {
  switch (filter) {
      case 'SHOW_ALL':
          return movies;
      case 'SHOW_WITH_TEXT':
          return movies;
      default:
          return movies;
  }
};

export const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
      case 'SET_VISIBILITY_FILTER': {
          return action.filter;
      }

      default:
          return state;
  }
};

