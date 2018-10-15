const express = require('express');
const router = express.Router();
const Game = require('../models/Game')
const Chapter = require('../models/Chapter')
const User = require('../models/User');

router.get('/', (req, res, next) => {
  Game.find()
    .then(data => res.status(200).json(data))
    .catch(e => next(e))
})

router.get('/:id', (req, res, next) => {
  Chapter.findById(req.params.id)
    .populate("options","title")
    .then(chapter => res.status(200).json(chapter))
    .catch(e => next(e))

})

router.put('/questions/:id', (req, res, next)=>{
  User.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.json({message: `User ${req.params.id} is updated successfully.`});
    })
    .catch(err => {
      res.json(err);
    })
})



module.exports = router;