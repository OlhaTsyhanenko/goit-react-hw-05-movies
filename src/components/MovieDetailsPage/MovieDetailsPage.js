import { useEffect, useState, lazy, Suspense } from "react";
import { useParams, useRouteMatch, Route, NavLink, useLocation, useHistory } from "react-router-dom";
import * as fetchApi from '../../api';
import Loader from '../Loader/Loader';
import styles from '../MovieDetailsPage/MovieDetailsPage.module.css';
import default_movieImg from '../../images/default_movie.jpg';

const Cast = lazy(() => import('../Cast/Cast' /* webpackChunkName: "Cast" */),);
const Reviews = lazy(() => import('../Reviews/Reviews' /* webpackChunkName: "Reviews" */),);

export default function HomePage() {
    const { movieId } = useParams();
    const { url, path } = useRouteMatch();
    const [movie, setMovie] = useState(null);
    const location = useLocation();
    const history = useHistory();

    useEffect(() => {
        fetchApi.fetchAboutMovie(movieId).then(setMovie)
    }, [movieId])

    const onGoBack = () => {
        history.push(location?.state?.from ?? '/movies');
    }
    
    return (
        <>
            {movie && <>                
                <button type="button" onClick={onGoBack} className={styles.btnGoBack}>Go back</button>
                <div className={styles.movieDetailsPage}>
                {movie.poster_path ? <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} width="300" />
                : <img src={default_movieImg} alt={movie.title} width="300" />}
                <div className={styles.movieDetailsPage_description}>
                    <h2>{movie.title} </h2>
                    <p><span className={styles.item}>Release date: </span>{movie.release_date}</p>
                    <p><span className={styles.item}>Popularity: </span>{movie.popularity}</p>
                    <p><span className={styles.item}>Overview: </span>{movie.overview}</p>
                    <p><span className={styles.item}>Genres: </span></p>
                    <ul className={styles.genreList}>
                        {movie.genres.map(genre =>
                            <li key={genre.id} className={styles.genreList_item}>{genre.name}</li>)}
                    </ul>  
                </div>
             </div>   
            </>
            }
            <div className={styles.navigation}>
                <nav>
                    <NavLink to={{
                        pathname: `${url}/cast`,
                        state: { ...location.state },
                    }}
                        className={styles.link} activeClassName={styles.activeLink}>Cast</NavLink>
                    <NavLink to={{
                        pathname: `${url}/reviews`,
                        state: { ...location.state  },
                    }}
                        className={styles.link} activeClassName={styles.activeLink}>Reviews</NavLink>
                </nav>
            </div>

            <Suspense fallback={<Loader />}>
             <Route path={`${path}/cast`}>
                <Cast /> 
            </Route>
            <Route path={`${path}/reviews`}>
                <Reviews /> 
            </Route>   
            </Suspense>
        </>
    )
}

