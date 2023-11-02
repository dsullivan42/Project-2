const router = require('express').Router();
const { Movie , User } = require('../models');
const withAuth = require('../utils/auth');





router.get("/movie", async (req, res) => {
  try {
    const movieData = await Movie.findAll();
    const movies = movieData.map((movie) => movie.get({plain: true}));
    res.render('movie', {
      movies,
      // logged_in: req.session.logged_in
    })
  } catch(err) {
    res.status(500).json(err);
  }
})

//might be better to rewrite the code below to be a search function
// router.get('/movies/:id', async (req, res) => {
//   try {
//     const movieData = await Movie.findByPk(req.params.id, {
//       include: [
//         {
//           model: User,
//           attributes: ['name'],
//         },
//       ],
//     });

//     const movie = movieData.get({ plain: true });

//     res.render('movie', {
//       ...movie,
//       logged_in: req.session.logged_in
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Movie }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
