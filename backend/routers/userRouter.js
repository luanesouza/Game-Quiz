const express = require('express')
const router = express.Router()
const User = require('../models/User')


// get all
router.get('/', async (req, res) => {
  console.log(User);
  try {
    const users = await User.find()
    console.log('here are the users', users);
    res.json(users)
  } catch(err) {
    res.status(500).json({message: err.message})
  }

})

// get one
router.get('/:id', (req, res) => {
  try {
    res.send(req.params.id)

  } catch(e) {
      console.error(e.message)
  }
})

// adding one
router.post('/', async (req, res) => {
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
router.patch('/:id', (req, res) => {
  try {
    res.send('update user')

  } catch(e) {
    res.status(400).json({ message: e.message})
  }

})

// deleting one

router.delete('/:id', (req, res) => {
  try {

  } catch(e) {
    console.error(e.message)
  }

})

module.exports = router
