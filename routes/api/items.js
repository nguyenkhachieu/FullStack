const express = require('express');
const router = express.Router();

// Item model
const Item = require('../../models/Item');

// @route   GET api/items
// @desc    get all items
// @access  Public
router.get('/', (req, res) => {
    Item.find()
        .sort({ date: -1 })
        .then(items => {
            return res.json(items)
        })
});

// @route   POST api/items
// @desc    Create a post
// @access  Public
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}))
});

// @route   Delete api/items
// @desc    delete a item
// @access  Public
router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });

    newItem.save().then(item => res.json(item));
});

module.exports = router;