import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from '../HomePage/HomePage.module.css';
import * as fetchApi from '../../api';

export default function HomePage() {
    const location = useLocation();
    const [movies, setMovies] = useState(null);

    useEffect(() => {
        fetchApi.fetchTrendingMovie().then(setMovies)
    }, [])

    return (
        <>
            {movies &&
                <ul className={styles.moviesGallery}>
                {movies.map(movie =>
                    <li key={movie.id} className={styles.moviesGalleryItem}>
                        <NavLink to={{
                            pathname: `movies/${movie.id}`,
                            state: { from: location },
                        }}
                            className={styles.link} activeClassName={styles.activeLink}>
                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className ={styles.moviesGalleryItem__movie} />
                            <p className ={styles.moviesGalleryItem__name}>{movie.title}</p>
                        </NavLink>
                    </li>)}
                </ul>
            }
        </>
    )
}