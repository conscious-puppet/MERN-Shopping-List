const express = require('express');
const router = express.Router();

// Item Model
const Item = require('../../models/Item');

// @route  GET api/items
// @desc   Get All Items
// @access Public
router.get('/', (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items))
    .catch(err => req.status(400).json(err));
});

// @route  POST api/items
// @desc   Create an Item
// @access Public
router.post('/', (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });

  newItem.save()
    .then(item => res.json(item))
    .catch(err => res.status(400).json(err));
});

// @route PATCH api/items/:id
// @desc Update an item
// @access Public
router.patch('/:id', (req, res) => {
  id = req.params.id;
  Item.updateOne({ _id: id }, {
    $set: req.body
  })
    .then(item => res.json(item))
    .catch(err => res.status(400).json(err));
});


// @route  DELETE api/items/:id
// @desc   Delete an Item
// @access Public
router.delete('/:id', (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove())
    .then(() => res.json({ success: true }))
    .catch(err => res.status(404).json({ err: 'Item not found' }));
});


module.exports = router;