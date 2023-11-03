const fetch = require('node-fetch');
const router = require('express').Router();
const {RatingMovie} = require('../../models')


router.post('/:id', async (req, res) => {
    try {
        const user_id = req.session.user_id;
        const imdb_id = req.params.id;
        const rating = req.body.rating;
        const title = req.body.title;
        const poster= req.body.poster;
        console.log(user_id, imdb_id, rating);
        const createdRating = await RatingMovie.create({
            poster,
            user_id,
            imdb_id,
            rating,
            title
        });

        res.status(200).json(createdRating);
    } catch (err) {
        res.status(400).json(err);
    }
});
module.exports = router;