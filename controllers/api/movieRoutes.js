const router = require('express').Router();
const { Movie } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newMovie = await Movie.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newMovie);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const movieData = await Movie.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!movieData) {
      res.status(404).json({ message: 'No movie found with this id!' });
      return;
    }

    res.status(200).json(movieData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
const fetch = require('node-fetch');
const router = require('express').Router();
const { Movie } = require('../../models');
const userSearch = 'Jaws'
const url = 'https://movie-database-alternative.p.rapidapi.com/?s='+userSearch+'&r=json&page=1';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '930796b621mshe52735eaff3a7a7p1b11abjsn95e68619975b',
    'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
  }
};

async function fetchData() {
  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

fetchData();
module.exports = Movie;
