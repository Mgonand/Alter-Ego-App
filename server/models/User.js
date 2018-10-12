const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  gamesCompleted: [{
    type: Schema.Types.ObjectId,ref:"Game"
  }, ],
  role: {
    type: String,
    enum : ['USER', 'ADMIN'],
    default : 'USER',
    info:{
      first:String,
      second:String,
      third:String,
    }
  }

}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;