const BASE_URL = 'https://api.themoviedb.org/3';
const keyApi = '0eaffcfede0123a8a4bf757f605a7a74';

async function fetchWithErrorHandling(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export function fetchTrendingMovie() {
    return fetchWithErrorHandling(`${BASE_URL}/trending/movie/day?api_key=${keyApi}`)
        .then(data => {
          // console.log(data.results);
          return data.results;
      });
}

export function fetchAboutMovie(movieId) {
    return fetchWithErrorHandling(`${BASE_URL}/movie/${movieId}?api_key=${keyApi}`)
        .then(data => {
          // console.log(data);
          return data;
      });
}

export function fetchCast(movieId) {
  return fetchWithErrorHandling(`${BASE_URL}/movie/${movieId}/credits?api_key=${keyApi} `)
        .then(data => {
          //  console.log(data.cast);
          return data.cast;
      });
  
}

export function fetchRewiews(movieId) {
  return fetchWithErrorHandling(`${BASE_URL}/movie/${movieId}/reviews?api_key=${keyApi} `)
       .then(data => {
         // console.log(data.results);
          return data.results;
      });
  
}

export function fetchSearchMovie(serchQuery = '', page = 1) {
  return fetchWithErrorHandling(`${BASE_URL}/search/movie?api_key=${keyApi}&query=${serchQuery}&page=${page} `)
       .then(data => {
          // console.log(data.results);
          return data.results;
      });
  
}
