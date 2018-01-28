import React from 'react';
import { URL_IMG, IMG_SIZE_SMALL } from '../const';

const MoviesListItem = ({ poster_path, title, release_date, popularity,  vote_count, vote_average }) => (
<div>
{/* URL_IMG IMG_SIZE_SMALL poster path
https://image.tmdb.org/t/p/w342//5vHssUeVe25bMrof1HyaPyWgaP.jpg */}
    <img src={URL_IMG + IMG_SIZE_SMALL + poster_path} className="movie__poster"></img>
    <p>{title}</p>
    <p>{release_date}</p>
    <p>{popularity}</p>
    <p>{vote_count}</p>
    <p>{vote_average}</p>
</div>
);

export default MoviesListItem;