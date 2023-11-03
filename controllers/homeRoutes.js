const router = require('express').Router();
const { Movie , User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/',  (req, res) => {
  
 res.render('homepage', {
    loggedIn: req.session.loggedIn
 });
});

router.get("/movie", async (req, res) => {
  try {
    const movieData = await Movie.findAll();
    const movies = movieData.map((movie) => movie.get({plain: true}));
    res.render('movie', {
      movies,
      loggedIn: req.session.loggedIn
    })
  } catch(err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.loggedIn) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

router.get('/movies', async (req, res) => {
  try {
    // Get all movies and JOIN with user data
    const movieData = await Movie.findAll();

    // Serialize data so the template can read it
    const movies = movieData.map((movie) => movie.get({ plain: true }));

    // Pass serialized data and session flag into template
    console.log(movies);
    res.render('movies', { 
      movies, 
      loggedIn: req.session.loggedIn 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
