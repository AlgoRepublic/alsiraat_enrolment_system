const { aysncMiddleware } = require('../../../../../middlewares/async')
const { successResponse } = require('../../../../../utils/response')

const ping = aysncMiddleware(async (req, res) => {
  return successResponse(res, 'Hello')
})

module.exports = ping
