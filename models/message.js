const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  
  messageText: {
    type: String,
    required: true
  }
},{
  //when a new version of row is added to database
  //automatically add timestamp to that row
  //we save created time, but don't need for the scope of this project
  //an update time
  timestamps: {
    createdAt: true,
    updatedAt: false
  }
})


module.exports = Message = mongoose.model('message', MessageSchema);
