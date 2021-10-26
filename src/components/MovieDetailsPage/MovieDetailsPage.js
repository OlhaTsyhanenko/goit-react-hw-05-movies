import { useEffect, useState } from "react";
import { useParams, useRouteMatch, Route, NavLink } from "react-router-dom";
import fetchDataMovie from '../../apiAboutMovie';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';
import styles from '../MovieDetailsPage/MovieDetailsPage.module.css'

export default function HomePage() {
    const { movieId } = useParams();
    const { url, path } = useRouteMatch();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        fetchDataMovie(movieId).then(setMovie)
    }, [movieId])
    
    return (
        <>
            {movie && <div className={styles.movieDetailsPage}>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} width="300" />
                <div className={styles.movieDetailsPage_description}>
                    <h2>{movie.title} </h2>
                    <p><span className={styles.item}>Release date: </span>{movie.release_date}</p>
                    <p><span className={styles.item}>Popularity: </span>{movie.popularity}</p>
                    <p><span className={styles.item}>Overview: </span>{movie.overview}</p>
                    <p><span className={styles.item}>Genres: </span></p>
                    <ul>
                        {movie.genres.map(genre =>
                            <li key={genre.id}>{genre.name}</li>)}
                    </ul>  
                </div>
                
            </div>
            }
            <div className={styles.navigation}>
                <nav>
                    <NavLink to={`${url}/cast`} className={styles.link} activeClassName={styles.activeLink}>Cast</NavLink>
                    <NavLink to={`${url}/reviews`} className={styles.link} activeClassName={styles.activeLink}>Reviews</NavLink>
                </nav>
            </div>
            


            <Route path={`${path}/cast`}>
                <Cast /> 
            </Route>
            <Route path={`${path}/reviews`}>
                <Reviews /> 
            </Route>
        </>
    )
}

