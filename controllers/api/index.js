const router = require('express').Router();
const userRoutes = require('./userRoutes');
const moviesRoutes = require('./movieRoutes');
const ratingRoutes = require('./ratingRoutes');
router.use('/users', userRoutes);
router.use('/movies', moviesRoutes);
router.use('/ratings', ratingRoutes);
module.exports = router;