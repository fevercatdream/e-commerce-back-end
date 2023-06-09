const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const allTags = await Tag.findAll({
      include: [Product]
    });
    res.json(allTags);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const oneTag = await Tag.findOne({
      where: {id: req.params.id}, 
      include: [Product]    
    });
    res.json(oneTag);
  } catch (err) {
    res.status(500).json(err);
  }  
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body)
    .then((newTag) => res.status(200).json(newTag))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
  .then((updatedTags) => res.json(updatedTags))
  .catch((err) => {
    // console.log(err);
    res.status(400).json(err);
  });
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try{
    // delete one product by its `id` value
    await Tag.destroy({
      where: {id: req.params.id}
    })
    res.status(200).end(`Tag deleted`);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
