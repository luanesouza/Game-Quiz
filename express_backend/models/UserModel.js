const mongoose = require('mongoose');
const Schema = mongoose.Schema
// Step 1: build User Schema

const UserSchema = new Schema({
  name: String,
  email: String,
  password: String,
  quizes: [{type: Schema.Types.ObjectId, ref: 'Quiz'}]
})

let User = mongoose.model('User', UserSchema);
module.exports = User
