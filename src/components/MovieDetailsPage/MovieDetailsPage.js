import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import * as dataApi from '../../apiMovies';
import fetchDataMovie from '../../apiAboutMovie';

export default function HomePage() {
    const {movieId}  = useParams();
    //const movieId = 550988;
    console.log(movieId);
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
        </>
    )
}

