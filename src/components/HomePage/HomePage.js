

import { useEffect, useState } from "react";
import { NavLink, useRouteMatch } from "react-router-dom";
import styles from '../HomePage/HomePage.module.css';
import * as fetchApi from '../../api';

export default function HomePage() {
    const { url } = useRouteMatch();
    const [movies, setMovies] = useState(null);

    useEffect(() => {
        fetchApi.fetchTrendingMovie().then(setMovies)
    }, [])
    
    return (
        <>
            {movies &&
                <ul className={styles.imageGallery}>
                {movies.map(movie =>
                    <li key={movie.id} className={styles.imageGalleryItem}>
                        <NavLink to={`movies/${movie.id}`} className={styles.link} activeClassName={styles.activeLink}>
                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className ={styles.imageGalleryItem__image} />
                            <p className ={styles.imageGalleryItem__name}>{movie.title}</p>
                        </NavLink>
                    </li>)}
                </ul>}
        </>
    )
}