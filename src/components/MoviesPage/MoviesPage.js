import { useEffect, useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import fetchData from "../../apiMovies";
// import * as dataApi from '../../apiMovies';

export default function HomePage() {
    const { url } = useRouteMatch();
    const [movies, setMovies] = useState(null);

    useEffect(() => {
        fetchData().then(setMovies)
    }, [])
    
    return (
        <>
            {movies && movies.map(movie =>
                <li key={movie.id}>
                    {/* <Link to={`${url}/${movie.id}`}>{movie.title}</Link> */}
                    <Link to={`movies/${movie.id}`}>{movie.title}</Link>
                </li>)}
        </>
    )
}