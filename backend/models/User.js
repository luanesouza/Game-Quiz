const mongoose = require('mongoose');
mongoose.set('debug', true);

// console.log(mongoose);

// Step 1: build User Schema

const UserSchema = new mongoose.Schema({
  name: String
})

let User = mongoose.model('User', UserSchema);
module.exports = User
