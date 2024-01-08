const {Signup, Login} = require('../controllers/authController')
const router = require('express').Router()
const {userVerification} = require('../Middlewares/AuthMiddleware')

router.post('/signup', Signup)
router.post('/login', Login)
router.post('/', userVerification)
router.get('/', userVerification)

module.exports = router