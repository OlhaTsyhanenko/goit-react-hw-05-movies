const keyApi = '0eaffcfede0123a8a4bf757f605a7a74';

export default function fetchDataSerch() {
  return fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${keyApi} `)
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
