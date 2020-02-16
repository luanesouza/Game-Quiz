const express = require('express')
const router = express.Router()
const app = express()
const User = require('../models/UserModel')


// get all
router.get('/users', async (req, res) => {
  // res.send('hello')
  const users = await User.find({})
  try {
    res.send(users)

  } catch(err) {
    res.status(500).send(err)
  }

})

// get one
router.get('/users/:id', (req, res) => {
  try {
    res.send(req.params.id)

  } catch(e) {
      console.error(e.message)
  }
})

// adding one
router.post('/users', async (req, res) => {
  const user = new User({
    name: 'Lilly'
  })
  try {
    const newUser = await user.save()
    res.status(201).json(newUser)
  } catch(e) {
      res.status(400).json({ message: e.message})
  }
})

// updating one. The reason why we wanna use patch instead of put is because put will update the entire instance, instead of only the attributes we want to update
router.patch('/users/:id', (req, res) => {
  try {
    res.send('update user')

  } catch(e) {
    res.status(400).json({ message: e.message})
  }

})

// deleting one

router.delete('/users/:id', (req, res) => {
  try {

  } catch(e) {
    console.error(e.message)
  }

})

module.exports = router
