const express = require('express')
const router = express.Router()

/* GET ingresos page. */
router.get('/', (req, res, next) => {
  res.send('GET /ingresos')
})

// GET ingreso con id
router.get('/:id', (req, res, next) => {
  res.send('GET ingresos/id')
})

// POST ingresos
router.post('/new', (req, res, next) => {
  res.send('POST /ingresos/new')
})

// UPDATE ingresos
router.put('/edit/:id', (req, res, next) => {
  res.send('PUT /ingresos/edit/:id')
})

// DESTROY ingreso
router.delete('/delete/:id', (req, res, next) => {
  res.send('DESTROY /ingresos/:id')
})

module.exports = router
