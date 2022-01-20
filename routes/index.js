const router = require('express').Router()

router.use('/api', require('./songRoutes.js'))

module.exports = router
