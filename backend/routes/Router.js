const router = require('express').Router()
const controller = require('../controllers/AuthController')
const middleware = require('../middleware')

router.get('/users', controller.getUsers)
router.get('/users/:user_id', controller.getUserById)
router.put('/users/:user_id', controller.updateProfile)
router.delete('/users/:user_id', controller.deleteAccount)
router.post('/login', controller.login)
router.post('/signup', controller.signUp)

module.exports = router