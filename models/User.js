const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
          username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              notEmpty: true,
              len: [3, 20],
            },
          },
          password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              isAlphanumeric: true,
              notEmpty: true,
              len: [8, 50],
            },
          },
          gender: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          avatar: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        },
    
)