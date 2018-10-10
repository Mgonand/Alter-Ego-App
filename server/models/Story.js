const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const storySchema = new Schema({
  title: String,
  text: String,
  prevOption:{type:Schema.Types.ObjectId, ref:'Prev'},
  option1:{type:Schema.Types.ObjectId, ref:'Op1'},
  option2:{type:Schema.Types.ObjectId, ref:'Op1'},
  type:{type:String,enum:["starting","badEnding","goodEnding","midPoint"]}
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Story = mongoose.model('Story', storySchema);
module.exports = Story;