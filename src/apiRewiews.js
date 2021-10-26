const keyApi = '0eaffcfede0123a8a4bf757f605a7a74';

export default function fetchDataRewiews(movieId) {
  return fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${keyApi} `)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
      .then(data => {
         // console.log(data.results);
          return data.results;
      });
  
}
