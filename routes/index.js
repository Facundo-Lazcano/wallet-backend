const express = require('express')
const router = express.Router()
const { postRegister, postLogin, getLogout } = require('../controllers/users')
const {
  getMovements,
  getMovementById,
  addMovement,
  editMovement,
  deleteMovement
} = require('../controllers/movements')
const { errorHandler, requireAuth } = require('../middlewares')

/* GET home page - all movements of that user. */
router.get('/', requireAuth, getMovements)

// GET movement by id
router.get('/:id', requireAuth, getMovementById)

// POST movements
router.post('/new', requireAuth, addMovement)

// UPDATE movements
router.put('/:id/edit', requireAuth, editMovement)

// DESTROY movement
router.delete('/:id/delete', requireAuth, deleteMovement)

// GET /register
router.get('/register', (req, res) => res.send('GET /register'))

// POST /register
router.post('/register', errorHandler(postRegister))

// GET /login
router.get('/login', (req, res, next) => {
  res.send('GET /login')
})

// POST /login
router.post('/login', errorHandler(postLogin))

// GET /logout
router.get('/logout', errorHandler(getLogout))

// GET /forgot
router.get('/forgot', (req, res, next) => {
  res.send('GET /forgot')
})

// PUT /forgot
router.put('/forgot', (req, res, next) => {
  res.send('PUT /forgot')
})

// GET /reset/:token
router.get('/reset/:token', (req, res, next) => {
  res.send('GET /reset/:token')
})

// PUT /reset/:token
router.put('/reset/:token', (req, res, next) => {
  res.send('PUT /reset/:token')
})

module.exports = router
