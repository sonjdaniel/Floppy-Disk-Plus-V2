const router = require('express').Router();
const { Monster } = require('../../models');

//Get one of the monsters
router.get('/:id', async (req, res) => {
    try {
        const monsterOne = await Monster.findByPk(req.params.id)
        res.json(monsterOne)
    } catch(err) {
        console.log(err)
    }
});

//Get all of the monsters
router.get('/', async (req, res) => {
    try {
        const monsters = await Monster.findAll();
        res.json(monsters)
    } catch(err) {
        console.log(err)
    }
});

//create monster
router.post('/', async (req, res) => {
    try {
        const monsterData = await Monster.create({
            name: req.body.name,
            description: req.body.description,
            hitpoints: req.body.hitpoints,
            is_dead: false,
            move_one: req.body.move_one,
            sprite: req.body.sprite,
            level_id: req.body.level_id,
        });
        const monster = monsterData.get({ plain: true });
        res.status(200).json(monster);
    } catch(err){
        console.log(err)
    }
});

//Update a monster
router.put('/:id', async (req, res) => {
    try {
      const monsterData = await Monster.update(req.body, {
        where: {id: req.params.id,},
      });
      res.json(monsterData);
    } catch (err) {
      console.log(err);
    }
  });

  //Delete a monster
  router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const where = { id };
        const monster = await Monster.destroy({ where });

        monster;
    } catch(err) {
        console.log(err, "Could not delete monster")
    }
});

module.exports = router;