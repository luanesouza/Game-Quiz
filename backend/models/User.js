var mongoose = require('mongoose');

console.log(mongoose);

// Step 1: build User Schema

const UserSchema = new mongoose.Schema({
  name: String
})

mongoose.model('User', UserSchema);
