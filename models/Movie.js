const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');





class Movie extends Model {}

Movie.init(

  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    poster: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    release_date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imdb_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    type: {
      type: DataTypes.STRING,
    },
  
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,

    modelName: 'Movie',
  }
);

// bulmaCarousel.attach('#carousel', {
//   slidesToScroll: 1,

//   slidestoShow: 4,

//   navigation: true,

//   loop: true,
// });

module.exports = Movie;
