const express = require('express')
const testRouters = require('./test')

const router = express.Router()

router.use('/test', testRouters)

module.exports = router
