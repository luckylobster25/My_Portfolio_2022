const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Painting extends Model {}

Painting.init(
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
    link: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    textBox: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    filename: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    optional: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    gallery_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'gallery',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'painting',
  }
);

module.exports = Painting;
