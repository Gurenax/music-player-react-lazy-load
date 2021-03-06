const passport = require('passport')
const JWT = require('jsonwebtoken')
const PassportJwt = require('passport-jwt')
const User = require('../models/User')
const dotenv = require('dotenv').config()

const jwtSecret = process.env.JWT_SECRET
const jwtAlgorithm = process.env.JWT_ALGO
const jwtExpiresIn = process.env.JWT_EXPIRE

passport.use(User.createStrategy())

const register = (req, res, next) => {
  const user = new User({
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName
  })
  // Create the user with the specified password
  User.register(user, req.body.password, (error, user) => {
    if (error) {
      // Our register middleware failed
      next(error)
      return
    }
    // Store user so we can access it in our handler
    req.user = user
    // Success!
    next()
  })
}

passport.use(
  new PassportJwt.Strategy(
    // Options
    {
      // Where will the JWT be passed in the HTTP request?
      // e.g. Authorization: Bearer xxxxxxxxxx
      jwtFromRequest: PassportJwt.ExtractJwt.fromAuthHeaderAsBearerToken(),
      // What is the secret
      secretOrKey: jwtSecret,
      // What algorithm(s) were used to sign it?
      algorithms: [jwtAlgorithm]
    },
    // When we have a verified token
    (payload, done) => {
      // Find the real user from our database using the `id` in the JWT
      User.findById(payload.sub)
        .then(user => {
          // If user was found with this id
          if (user) {
            done(null, user)
          } else {
            // If not user was found
            done(null, false)
          }
        })
        .catch(error => {
          // If there was failure
          done(error, false)
        })
    }
  )
)

const signJWTForUser = (req, res) => {
  // Get the user (either just signed in or signed up)
  const user = req.user
  // Create a signed token
  const token = JWT.sign(
    // payload
    {
      email: user.email
    },
    // secret
    jwtSecret,
    {
      algorithm: jwtAlgorithm,
      expiresIn: jwtExpiresIn,
      subject: user._id.toString()
    }
  )
  // Send the token
  res.json({ token })
}

module.exports = {
  initialize: passport.initialize(),
  register,
  signIn: passport.authenticate('local', { session: false }),
  requireJWT: passport.authenticate('jwt', { session: false }),
  signJWTForUser
}
