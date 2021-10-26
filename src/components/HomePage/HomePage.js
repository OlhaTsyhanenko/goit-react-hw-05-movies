

import { useEffect, useState } from "react";
import { NavLink, useRouteMatch } from "react-router-dom";
import fetchData from "../../apiMovies";
import styles from '../HomePage/HomePage.module.css';
// import * as dataApi from '../../apiMovies';

export default function HomePage() {
    const { url } = useRouteMatch();
    const [movies, setMovies] = useState(null);

    useEffect(() => {
        fetchData().then(setMovies)
    }, [])
    
    return (
        <>
            {movies &&
                <ul className={styles.imageGallery}>
                {movies.map(movie =>
                    <li key={movie.id} className={styles.imageGalleryItem}>
                        {/* <Link to={`${url}/${movie.id}`}>{movie.title}</Link> */}
                        <NavLink to={`movies/${movie.id}`} className={styles.link} activeClassName={styles.activeLink}>
                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className ={styles.imageGalleryItem__image} />
                            <p className ={styles.imageGalleryItem__name}>{movie.title}</p>
                        </NavLink>
                    </li>)}
                </ul>}
        </>
    )
}