const mongoose = require('mongoose');
const Schema = mongoose.Schema
// Step 1: build QuizSchema

const QuizSchema = new Schema({
  topic: String,
  users: [{type: Schema.Types.ObjectId, ref: 'User'}]
})

let Quiz = mongoose.model('Quiz', QuizSchema);
module.exports = Quiz
