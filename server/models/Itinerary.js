const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const itinerarySchema = new Schema({
  user: Schema.Types.ObjectId,
  start: Schema.Types.ObjectId,
  end: Schema.Types.ObjectId,
  options:[{type:Schema.Types.ObjectId},],
  numberOfOptions:this.options.length
  
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Itinerary = mongoose.model('Itinerary', itinerarySchema);
module.exports = Itinerary;