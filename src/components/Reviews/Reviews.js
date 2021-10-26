import { useParams } from "react-router";
import { useEffect, useState } from "react";
import fetchDataRewiews from '../../apiRewiews';


export default function Rewiews() {
    const { movieId } = useParams();
    const [rewiews, setRewiews] = useState(null);
    console.log(movieId);

    useEffect(() => {
        fetchDataRewiews(movieId).then(setRewiews)
    }, [movieId])

    return (
        <>
            {rewiews && <>
                <ul>
                    {rewiews.map(el =>
                        <li key={el.id}>
                            <p>{el.author}</p>
                            <p>{el.updated_at}</p>
                            <p>{el.content}</p>
                        </li>)}
                </ul>
                </>
            }
        </>
    )
}