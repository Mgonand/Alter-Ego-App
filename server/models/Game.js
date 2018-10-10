const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const gameSchema = new Schema({
  title: String,
  author: String,
  description: String,
  chapters:[{type:Schema.Types.ObjectId},]
  
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Game = mongoose.model('Game', gameSchema);
module.exports = Game;