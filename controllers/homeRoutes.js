const router = require('express').Router();
const { Movie , User, RatingMovie } = require('../models');
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
    res.render('movies', {
      movies,
      loggedIn: req.session.loggedIn
    })
  } catch(err) {
    res.status(500).json(err);
  }
});

router.get("/movie/:id", async (req, res) => {
  try {
    const movieData = await Movie.findByPk(req.params.id);
    const movie = movieData.get({plain: true});
    res.render('single-movie', {
      movie,
      loggedIn: req.session.loggedIn
    })
  } catch(err) {
    res.status(500).json(err);
  }
})

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ 
        model: RatingMovie,
        attributes: ['rating', 'title', 'imdb_id', 'poster', 'type', 'release_date']
       }],
    });
    if(!userData) {
      res.status(404).json({message: 'No user found with this id'});
      return;
    }

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      loggedIn: req.session.loggedIn
    });
  } catch (err) {
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
