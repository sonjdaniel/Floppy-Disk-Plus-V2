const router = require('express').Router();
const { Pokemon } = require('../../models');

//Get one of the monsters
router.get('/:id', async (req, res) => {
    try {
        const pokemon = await Pokemon.findByPk(req.params.id)
        res.json(pokemon)
    } catch(err) {
        console.log(err)
    }
});

//Get all of the monsters
router.get('/', async (req, res) => {
    try {
        const pokemon = await Pokemon.findAll();
        res.json(pokemon)
    } catch(err) {
        console.log(err)
    }
});

  //Delete a monster
  router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const where = { id };
        const pokemon = await Pokemon.destroy({ where });

        pokemon;
    } catch(err) {
        console.log(err, "Could not delete monster")
    }
});

module.exports = router;