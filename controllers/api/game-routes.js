const router = require('express').Router();
const { Game } = require('../../models');

//Get one of the games
router.get('/:id', async (req, res) => {
    try {
        const gameOne = await Game.findByPk(req.params.id)
        res.json(gameOne)
    } catch(err) {
        console.log(err)
    }
});

//Get all of the games
router.get('/', async (req, res) => {
    try {
        const games = await Game.findAll();
        res.json(games)
    } catch(err) {
        console.log(err)
    }
});

//Delete a game
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const where = { id };
        const gameOne = await Game.destroy({ where });

        gameOne;
    } catch(err) {
        console.log(err, "Could not delete game")
    }
});

module.exports = router;