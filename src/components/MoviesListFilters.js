import React from 'react'
import {connect} from 'react-redux';
import {searchMovieList} from '../actions/actions';
import FaSearch from 'react-icons/lib/fa/search';
import '../styles/moviesListFilters.css';

const MoviesListFilters = (props) => (

    <div className="filter__container">
        <div className="filter__input">
            <FaSearch/>
            <input
                type="text"
                onChange={(e) => {
                props.dispatch(searchMovieList(e.target.value))
            }}/>

        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {filters: state.visibilityFilter};
};

export default connect(mapStateToProps)(MoviesListFilters);