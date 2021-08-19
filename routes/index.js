var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'PROBANDO' })
})

// GET /register
router.get('/register', (req, res, next) => {
  res.send('GET /register')
})

// POST /register
router.post('/register', (req, res, next) => {
  res.send('POST /register')
})

// GET /login
router.get('/login', (req, res, next) => {
  res.send('GET /login')
})

// POST /login
router.post('/login', (req, res, next) => {
  res.send('POST /login')
})

// GET /profile
router.get('/profile', (req, res, next) => {
  res.send('GET /profile')
})

// PUT /profile/:id
router.put('/profile/:id', (req, res, next) => {
  res.send('PUT /profile/:id')
})

// GET /forgot
router.get('/forgot', (req, res, next) => {
  res.send('GET /forgot')
})

// PUT /forgot
router.put('/forgot', (req, res, next) => {
  res.send('PUT /forgot')
})

// GET /reset
router.get('/reset', (req, res, next) => {
  res.send('GET /reset')
})

// PUT /reset
router.put('/reset', (req, res, next) => {
  res.send('PUT /reset')
})

module.exports = router
