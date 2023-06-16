//Starting code
const User = require("./User");
const Game = require("./Game");
const Level = require("./Level");
const Monster = require("./Monster");
const Pokemon = require("./Pokemon");

User.hasMany(Pokemon, {
  foreignKey: "user_id",
});
