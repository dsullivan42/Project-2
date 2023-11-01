
const fetch = require('node-fetch');
const router = require('express').Router();
const { Movie } = require('../../models')
const movieData = []
const userSearch = 'Jaws'
const url = 'https://movie-database-alternative.p.rapidapi.com/?s='+userSearch+'&r=json&page=1';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '930796b621mshe52735eaff3a7a7p1b11abjsn95e68619975b',
    'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
  }
};

// async function fetchData() {
//   try {
//     const response = await fetch(url, options);
//     const result = await response.json();
//     // const jsonResults = result.json();
//     // console.log(jsonResults)
//     result.Search.forEach(movie => {
//       // Create an object for each movie and push it into the array
//       movieData.push({
//         Title: movie.Title,
//         Year: movie.Year,
//         imdbID: movie.imdbID,
//         Type: movie.Type,
//         Poster: movie.Poster
//       });

//     });
//     console.log(movieData)
//     // make post request to api/movie
    
    
//   } catch (error) {
//     console.error(error);
//   }
// }

router.post('/api/movie', async (req, res) => {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    // const jsonResults = result.json();
    // console.log(jsonResults)
    result.Search.forEach(movie => {
      // Create an object for each movie and push it into the array
      movieData.push({
        Title: movie.Title,
        Year: movie.Year,
        imdbID: movie.imdbID,
        Type: movie.Type,
        Poster: movie.Poster
      });

    });

  } catch (err) {
    res.status(400).json(err);
  }
});

// fetchData();
module.exports = Movie;

