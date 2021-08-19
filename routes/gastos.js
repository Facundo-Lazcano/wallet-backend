const express = require('express')
const router = express.Router()

/* GET gastos page. */
router.get('/', (req, res, next) => {
  res.send('GET /gastos')
})

// GET ingreso con id
router.get('/:id', (req, res, next) => {
  res.send('GET gastos/id')
})

// POST gastos
router.post('/new', (req, res, next) => {
  res.send('POST /gastos/new')
})

// UPDATE gastos
router.put('/edit/:id', (req, res, next) => {
  res.send('PUT /gastos/edit/:id')
})

// DESTROY ingreso
router.delete('/delete/:id', (req, res, next) => {
  res.send('DESTROY /gastos/:id')
})

module.exports = router
