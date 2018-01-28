import React from 'react';
import {URL_IMG, IMG_SIZE_SMALL} from '../const';
import {Link} from 'react-router-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import StarRatingComponent from 'react-star-rating-component';
import FaCalendarO from 'react-icons/lib/fa/calendar-o';
import '../styles/moviesListItem.css';
import {push} from 'connected-react-router'

// production_countries production_companies genres

const MoviesListItem = ({
    poster_path,
    title,
    release_date,
    popularity,
    vote_count,
    vote_average,
    id,
    imdb_id,
    overview,
    genres
}) => (
    <div className="movie__container">
        <Link to={`/movie/${id}`}>
            <img src={URL_IMG + IMG_SIZE_SMALL + poster_path} className="movie__poster"></img>
        </Link>
        <div className="movie__title">
            <h2>{title}</h2>
            <p className="movie__relase"><FaCalendarO/> {release_date}</p>
        </div>
        <div className="movie__popularity">
            <p>Popularność: {popularity}</p>
            <p>Liczba głosów: {vote_count}</p>
        </div>
        <div className="movie__vote">
            <p>Średnia głosów: {vote_average}
            </p>
            <StarRatingComponent
                name="rate1"
                starCount={10}
                value={vote_average}
                editing={false}/>
        </div>
        <Link
            to={{
            pathname: 'movie/' + id,
            state: {
                id: id,
                title: title,
                overview: overview,
                imdb_id: imdb_id,
                genres: genres,
                release_date: release_date,
                vote_average: vote_average,
                vote_count: vote_count,
                popularity: popularity,
                poster_path: poster_path
            }
        }}>
            <button onClick={() => console.log(title)} className="movie__button">
                Zobacz więcej
            </button>
        </Link>

    </div>
);

export default MoviesListItem;
