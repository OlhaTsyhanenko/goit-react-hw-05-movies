import { useParams } from "react-router";
import { useEffect, useState } from "react";
import * as fetchApi from '../../api';
import styles from '../Reviews/Reviews.module.css';


export default function Reviews() {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);
    // console.log(movieId);

    useEffect(() => {
        fetchApi.fetchRewiews(movieId).then(setReviews)
    }, [movieId])
    
    const emptyReviews = reviews.length === 0;
    return (
        <>
            {reviews && 
                <ul >
                    {reviews.map(el =>
                        <li key={el.id} >
                            <p className={styles.name}>{el.author}</p>
                            <p className={styles.updated_at}>{el.updated_at}</p>
                            <p>{el.content}</p>
                        </li>)}
                </ul> 
            }
            {emptyReviews && <p className={styles.emptyReviews}>We don't have any reviews for this movie!</p>}
            
        </>
    )
}