const fetch = require('node-fetch');
const router = require('express').Router();
const { Movie } = require('../../models')
const movieData = []


const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '930796b621mshe52735eaff3a7a7p1b11abjsn95e68619975b',
    'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
  }
};


router.post('/', async (req, res) => {
  try {
    const userSearch = req.body.searchTerm; // Get the user's search term from the request body
    console.log(userSearch);
    if (!userSearch) {
      return res.status(400).json({ error: "Missing search term" });
    }

    const url = `https://movie-database-alternative.p.rapidapi.com/?s=${userSearch}&r=json&page=1`;

    const response = await fetch(url, options);
    const result = await response.json();

    // Clear out the movieData array
    await Movie.destroy ({ where: {}});
    
    movieData.length = 0;

    result.Search.forEach(movie => {
      // Create an object for each movie and push it into the array
      movieData.push({
        title: movie.Title,
        poster: movie.Poster,
        release_date: movie.Year,
        imdb_id: movie.imdbID,
        type: movie.Type,
      });
    });

    console.log(movieData);
    const createdMovies = await Movie.bulkCreate(movieData)

    // Respond with the populated movieData array
    res.json(createdMovies);
  } catch (err) {
    res.status(400).json(err);
  }
});


module.exports = router; 
