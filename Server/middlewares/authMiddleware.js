const User = require('../schemas/user')
const jwt = require('jsonwebtoken')

async function authenticate(req, res, next) {
  const { username, password } = req.body

  try {
    const user = await User.findOne({ username })

    if (!user) {
      return res.status(401).json({ success: false, message: 'Unable to authenticate' })
    }

    const isPasswordMatch = await user.comparePassword(password)

    if (!isPasswordMatch) {
      return res.status(401).json({ success: false, message: 'Unable to authenticate' })
    }

    const token = jwt.sign({ username: user.username }, 'SECRETKEY')
    res.json({ success: true, token })

  } catch (error) {
    next(error)
  }
}

module.exports = authenticate
