const { issueRefreshToken, validateRefreshToken, revokeRefreshToken } = require('../controllers/refreshTokenController')
const express = require('express')
const router = express.Router()
// Route to issue a new refresh token
router.post('/issue', issueRefreshToken);

// Route to validate a refresh token and issue a new access token
router.post('/validate', validateRefreshToken);

// Route to revoke a refresh token
router.post('/revoke', revokeRefreshToken);

module.exports = router;
