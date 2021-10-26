import { useParams } from "react-router";
import { useEffect, useState } from "react";
import fetchDataCast from '../../apiCast';


export default function Cast() {
    const { movieId } = useParams();
    const [cast, setCast] = useState(null);
    console.log(movieId);

    useEffect(() => {
        fetchDataCast(movieId).then(setCast)
    }, [movieId])

    return (
        <>
            {cast && <>
                <ul>
                    {cast.map(el => {
                        if (el.known_for_department === 'Acting') {
                            return (
                            <li key={el.id}>{el.name}
                        <img src={`https://image.tmdb.org/t/p/w500${el.profile_path}`} alt={el.name} width="150" /></li>  
                          )                        
                        }  
                    }
                        
                        )}
                </ul>
                </>
            }
        </>
    )
}