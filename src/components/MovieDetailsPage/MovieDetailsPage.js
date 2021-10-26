import { useEffect, useState } from "react";
import { useParams, useRouteMatch, Route, NavLink } from "react-router-dom";
import fetchDataMovie from '../../apiAboutMovie';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';

export default function HomePage() {
    const { movieId } = useParams();
    const { url, path } = useRouteMatch();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        fetchDataMovie(movieId).then(setMovie)
    }, [movieId])
    
    return (
        <>
            {movie && <>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} width="300" />
                <h2>{movie.title} {movie.release_date}</h2>
                <p>Popularity: {movie.popularity}</p>
                <p>Overview:</p>
                <p>{movie.overview}</p>
                <p>Genres:</p>
                <ul>
                    {movie.genres.map(genre =>
                    <li key={genre.id}>{genre.name}</li>)}
                </ul>
            </>
            }
            <NavLink to={`${url}/cast`}>Cast</NavLink>
            <NavLink to={`${url}/reviews`}>Reviews</NavLink>


            <Route path={`${path}/cast`}>
                <Cast /> 
            </Route>
            <Route path={`${path}/reviews`}>
                <Reviews /> 
            </Route>
        </>
    )
}

