const express = require('express')
const router = express.Router()
const app = express()
const Quiz = require('../models/QuizModel')

// get all
router.get('/quizes', async (req, res) => {
  const quizes = await Quiz.find({})
  try {
    res.send(quizes)

  } catch(err) {
    res.status(500).send(err)
  }

})

// get one
router.get('/quizes/:id', (req, res) => {
  try {
    res.send(req.params.id)

  } catch(e) {
      console.error(e.message)
  }
})

// adding one
router.post('/quizes', async (req, res) => {
  const quiz = new Quiz(req.body)
  try {
    const newQuiz = await quiz.save()
    res.status(201).json(newQuiz)
  } catch(e) {
      res.status(400).json({ message: e.message})
  }
})

// updating one. The reason why we wanna use patch instead of put is because put will update the entire instance, instead of only the attributes we want to update
router.patch('/quizes/:id', (req, res) => {
  try {
    res.send('update quiz')

  } catch(e) {
    res.status(400).json({ message: e.message})
  }

})

// deleting one

router.delete('/quizes/:id', (req, res) => {
  try {

  } catch(e) {
    console.error(e.message)
  }

})

module.exports = router
