const express = require('express')
const router = express.Router()
const AuthController = require ('../Controllers/AuthController')
const loginLimiter = require('../middleware/loginLimiter')

router.route('/')
    .post(loginLimiter,AuthController.login)

router.route('/refresh')
    .get(AuthController.refresh)

router.route('/logout')
    .post(AuthController.logout)

module.exports = router
export default router;