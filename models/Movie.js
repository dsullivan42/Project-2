const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Movie extends Model {}

Movie.init(

  {
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
      primaryKey: true,
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

module.exports = Movie;
