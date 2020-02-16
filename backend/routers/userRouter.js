const express = require('express')
const router = express.Router()


// get all
router.get('/', (req, res) => {
  res.send('See all')

})

// get one
router.get('/:id', (req, res) => {
  // res.send(req.params.id, 'See one user')
})

// adding one
router.post('/', (req, res) => {
  // res.send('Create a user')
})

// updating one. The reason why we wanna use patch instead of put is because put will update the entire instance, instead of only the attributes we want to update
router.patch('/:id', (req, res) => {
  res.send('update user')

})

// deleting one

router.delete('/:id', (req, res) => {

})

module.exports = router
