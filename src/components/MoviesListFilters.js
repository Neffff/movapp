import React, {Component} from 'react'
import {connect} from 'react-redux';
import {searchMovieList} from '../actions/actions';
import FaSearch from 'react-icons/lib/fa/search';
import '../styles/moviesListFilters.css';

const WAIT_INTERVAL = 500;
let timer = null;

class MoviesListFilters extends Component {
    render() {
        const {dispatch} = this.props;
        return (
            <div className="filter__container">
                <div className="filter__input">
                    <FaSearch/>
                    <input
                        type="text"
                        onChange={(e) => {
                        let val = e.target.value;
                        clearTimeout(timer);
                        timer = setTimeout(() => this.props.dispatch(searchMovieList(val)), WAIT_INTERVAL);
                    }}/>

                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {filters: state.visibilityFilter};
};

export default connect(mapStateToProps)(MoviesListFilters);