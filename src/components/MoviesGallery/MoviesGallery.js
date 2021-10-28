import PropTypes from 'prop-types';
import { NavLink, useRouteMatch, useLocation } from "react-router-dom";
import styles from './MoviesGallery.module.css';
import default_movieImg from '../../images/default_movie.jpg';

const MoviesGallery = ({ data }) => {
  const { url } = useRouteMatch();
  const location = useLocation();

  return (
    <ul className={styles.moviesGallery}>
      {data.map(movie =>
        <li key={movie.id} className={styles.moviesGalleryItem}>
          <NavLink to={{
            pathname: `${url}/${movie.id}`,
            state: { from: location },
          }} className={styles.link} activeClassName={styles.activeLink} >
            {movie.poster_path ? <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className={styles.moviesGalleryItem__movies} />
              : <img src={default_movieImg} alt={movie.title} className={styles.moviesGalleryItem__movies} />}
            <p className={styles.moviesGalleryItem__name}>{movie.title}</p>
          </NavLink>
        </li>
      )}
    </ul>
  )
}
  
MoviesGallery.propTypes = {
  data: PropTypes.array
};

export default MoviesGallery;
