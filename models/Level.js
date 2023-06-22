const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Level extends Model {}

Level.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
})