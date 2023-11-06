const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const User = require('./User');
class RatingMovie extends Model {}

RatingMovie.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    type:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    release_date:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    poster:{
        type: DataTypes.STRING,
        allowNull: false,
        },
    imdb_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: 'id',
      }
    },
  },
  {
    sequelize, // Pass the Sequelize instance correctly
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'RatingMovie',
  }
);

module.exports = RatingMovie;