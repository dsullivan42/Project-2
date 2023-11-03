const User = require('./User');

const Movie = require('./Movie');
const RatingMovie = require('./RatingMovie');

User.hasMany(RatingMovie, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Movie.belongsTo(User, {
  foreignKey: 'user_id'
});

RatingMovie.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Movie, RatingMovie };
