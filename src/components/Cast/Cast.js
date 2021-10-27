import { useParams } from "react-router";
import { useEffect, useState } from "react";
import * as fetchApi from '../../api';
// import fetchDataCast from '../../apiCast';
import defaultImg from '../default.jpg';
import styles from '../Cast/Cast.module.css';


export default function Cast() {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);
    // console.log(movieId);

    useEffect(() => {
        fetchApi.fetchCast(movieId).then(setCast)
    }, [movieId])

    const emptyCast = cast.length === 0;

    return (
        <>
            {cast && <>
                <ul className={styles.imageGallery}>
                    {cast.map(el => {
                        if (el.known_for_department === 'Acting') {
                            return (
                                <li key={el.id} className={styles.imageGalleryItem}>
                                    {el.profile_path ? <img src={`https://image.tmdb.org/t/p/w500${el.profile_path}`} alt={el.name} className={styles.imageGalleryItem__image} /> :
                                        <img src={defaultImg} alt={el.name} className={styles.imageGalleryItem__image} />
                                    }
                                    <p className={styles.imageGalleryItem__name}>{el.name}</p>
                                </li>
                            )
                        }})
                    }
                </ul>
            </>
            }
            {emptyCast && <p className={styles.emptyCast}>We don't have any actors for this movie!</p> }
        </>
    )
}