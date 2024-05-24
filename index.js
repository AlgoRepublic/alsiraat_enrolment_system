global.__basedir = __dirname
require('./utils/dotenv')
const path = require('path')
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const apiRoutes = require('./routes/api')
const dbConnection = require('./config/database')
const app = express()

app.use(cors({ origin: '*' }))
app.use(morgan('tiny'))
app.use(
  express.urlencoded({ extended: true, limit: '50mb', parameterLimit: 50000 })
)
app.use(express.json({ limit: '50mb' }))
app.use(
  fileUpload({
    debug: false,
    parseNested: true,
    createParentPath: true,
    preserveExtension: true,
  })
)

app.use('/api/v1', apiRoutes)
app.use('/storage', express.static(path.join(__dirname, './storage')))

dbConnection().then((result) => {
  if (result) {
    app.listen(process.env.PORT, () => {
      console.log(
        `App listening on port ${process.env.PORT} in ${process.env.NODE_ENV} environment`
      )
    })
  }
})
