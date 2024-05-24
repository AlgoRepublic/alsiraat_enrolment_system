const express = require('express')
const { ping } = require('../../../../controllers/api/v1/admin/test')

const app = express.Router()

app.get('/ping', ping)

module.exports = app
