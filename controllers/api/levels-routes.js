const router = require('express').Router();
const { Level } = require('../../models');

//get one level
router.get('/:id', async (req, res) => {
    try {
        const levelData = await Level.findByPk(req.params.id)
        res.json(levelData)
    } catch(err) {
        console.log(err)
    }
});

//Get all levels
router.get('/', async (req, res) => {
    try {
        const levelData = await Level.findAll();
        res.json(levelData)
    } catch(err) {
        console.log(err)
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const where = { id };
        const levelData = await Level.destroy({ where });

        levelData;
    } catch(err) {
        console.log(err, "Could not delete game")
    }
});