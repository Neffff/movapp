import React, {Component} from 'react';
import {connect} from 'react-redux';
import MoviesListItem from './MoviesListItem';
import {fetchMovieList} from '../actions/actions';
import '../styles/moviesList.css';

class MovieList extends Component {
    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(fetchMovieList());
    }
    render() {
        const {items, filters} = this.props;
        return (
            <div className="movies__container">
                <h1>Twoje wyszukiwania:</h1>
                {items && items.map((movie) => {
                    return <MoviesListItem key={movie.id} {...movie}/>
                })}
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    console.log(state.moviesList.items);
    return {items: state.moviesList.items, filters: state.visibilityFilter};
}
export default connect(mapStateToProps)(MovieList);
