import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import queryString from 'query-string';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as fetchApi from '../../api';
import Searchbar from '../../components/Searchbar/Searchbar';
import MoviesGallery from '../../components/MoviesGallery/MoviesGallery';
import Button from '../../components/Button/Button';
import Loader from '../../components/Loader/Loader';

export default function MoviesPage() {
  const history = useHistory();
  const location = useLocation();
  const { search } = location;
  const { query } = queryString.parse(search);


  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [serchQuery, setSerchQuery] = useState(query || '');
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [showMessage, setShowMessage] = useState(false);
  
  useEffect(() => {
    if (!serchQuery) {
      return;
    }
    fetchData();
  }, [serchQuery])
  
  const handleFormSubmit = query => {
    setSerchQuery(query);
    setPage(1);
    setData([]);
    history.push({ ...location, search: `query=${query}`, })
  }

  const fetchData = () => {
    setIsLoading(true);
    setShowMessage(false);
    
    fetchApi
      .fetchSearchMovie(serchQuery, page)
      .then((data) => {
        setData(prevState => [...prevState, ...data]);
        setPage(prevState => prevState + 1);
        
        if (serchQuery !== '' && data.length === 0) {
          setShowMessage(true);
        }
        if (page !== 1) {
          scrollOnLoadButton();
        }
      })
      .catch(error => setError( error ))
      .finally(() => {
        setIsLoading(false);
    }
      )
  }

    const scrollOnLoadButton = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
    };
  
  const showLoadMore = data.length > 0 && data.length >= 12;
    return (
      <div >
        <Searchbar onSubmit={handleFormSubmit} />
        <MoviesGallery data={data} />         
        {isLoading && <Loader />}
        {showMessage && <h2 >The gallery is empty! Try another query!</h2>}
        {showLoadMore && <Button onClick={fetchData} />}
        {error && <h2>{error.message}</h2>}
        <ToastContainer autoClose={2000}/>
    </div>  
    )
}