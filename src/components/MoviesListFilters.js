import React from 'react'
import { connect } from 'react-redux';
import { searchMovieList } from '../actions/actions';
const MoviesListFilters = (props) =>  (
            <input
                type="text"
                // value={props.filters.text}
                onChange={(e) => {
                    props.dispatch(searchMovieList(e.target.value))
                    console.log(e.target.value)
                }}
            />
    );

    // componentWillReceiveProps(nextProps) {
    //     const {dispatch} = this.props;
    //       if(nextProps.params.keyword && this.props.params.keyword !== nextProps.params.keyword) {
    //           dispatch(searchMovieList(nextProps.params.keyword));
    //        }
    //  }

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(MoviesListFilters);