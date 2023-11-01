const router = require('express').Router();
const userRoutes = require('./userRoutes');
const moviesRoutes = require('./movieRoutes');

router.use('/users', userRoutes);
router.use('/movies', moviesRoutes);
const movieRoutes = require('./movieRoutes');

router.use('/users', userRoutes);
router.use('/movies', movieRoutes);

module.exports = router;