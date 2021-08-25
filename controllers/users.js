const { User } = require('../database')
const bcrypt = require('bcryptjs')
const passport = require('passport')
const jwt = require('jsonwebtoken')

const postRegister = async (req, res) => {
  let { email, password } = req.body
  const hash = await bcrypt.hash(password, 10)
  password = hash
  try {
    const register = await User.create({ email, password })
    res.json(register)
  } catch (error) {
    console.log(error)
  }
}

const postLogin = async (req, res) => {
  const { email, password } = req.body
  const hash = await bcrypt.hash(password, 10)
  const user = await User.findOne({ where: { email } })
  if (user) {
    const validPass = await bcrypt.compare(password, user.password)
    console.log(validPass)
    if (validPass) {
      const token = jwt.sign(
        {
          email,
          userId: user.id
        },
        'secret',
        (err, token) => {
          res.json({
            token: token
          })
        }
      )
    }
  }
}

const getLogout = (req, res, next) => {
  req.logout()
  res.redirect('/login')
}

module.exports = {
  postRegister,
  postLogin,
  getLogout
}
