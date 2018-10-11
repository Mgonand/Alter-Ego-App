const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const itinerarySchema = new Schema({
  user: {type: Schema.Types.ObjectId , ref:"User"},
  start: {type: Schema.Types.ObjectId , ref:"Chapter"},
  end: {type: Schema.Types.ObjectId , ref:"Chapter"},
  options:[{type: Schema.Types.ObjectId , ref:"Chapter"}]
  
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Itinerary = mongoose.model('Itinerary', itinerarySchema);
module.exports = Itinerary;