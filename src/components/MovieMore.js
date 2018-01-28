import React from 'react';
import {URL_IMG, IMG_SIZE_SMALL, URL_DETAIL, API_KEY} from '../const';
import StarRatingComponent from 'react-star-rating-component';
import {connect} from 'react-redux';
import FaCalendarO from 'react-icons/lib/fa/calendar-o';
import FaArrowCircleOLeft from 'react-icons/lib/fa/arrow-circle-o-left';
import {Link} from 'react-router-dom';
import '../styles/movieMore.css';

const MovieMore = (props) => (
    <div>
        <Link to="/"><FaArrowCircleOLeft className="more__icon"/></Link>
        <div className="more__cont">
        <div className="more__container">
            <img
                src={URL_IMG + IMG_SIZE_SMALL + props.location.state.poster_path}
                className="movie__poster"></img>
            <div className="movie__title">
                <h2>{props.location.state.title}</h2>
                <p className="movie__relase"><FaCalendarO/> {props.location.state.release_date}</p>
            </div>
            <div className="movie__popularity">
                <p>Popularność: {props.location.state.popularity}</p>
                <p>Liczba głosów: {props.location.state.vote_count}</p>
            </div>
            <div className="movie__vote">
                <p>Średnia głosów: {props.location.state.vote_average}
                </p>
                <StarRatingComponent
                    name="rate1"
                    starCount={10}
                    value={props.location.state.vote_average}
                    editing={false}/>
            </div>
            <p>{props.location.state.overview}</p>
            {console.log(props.match.params)}
            {console.log(props.location.state)}
        </div>
        </div>
    </div>
);
const mapStateToProps = (state, ownProps) => {
    console.log(state.moviesList.items);
    return {items: state.moviesList.items};
}
export default connect(mapStateToProps)(MovieMore);