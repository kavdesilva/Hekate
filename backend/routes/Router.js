const router = require('express').Router()
const controller = require('../controllers/AuthController')
const middleware = require('../middleware')

router.get('/users', controller.getUsers)
router.post('/login', controller.login)
router.post('/signup', controller.signUp)

module.exports = router