const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const chapterSchema = new Schema({
  title: String,
  text: String,
  prevOption:{type:Schema.Types.ObjectId, ref:'Chapter'},
  options:[{type:Schema.Types.ObjectId, ref:'Chapter'}],
  ref:Number,
  originRef:Number,
  type:{type:String,enum:["starting","badEnding","goodEnding","midPoint"]}
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Chapter = mongoose.model('Chapter', chapterSchema);
module.exports = Chapter;