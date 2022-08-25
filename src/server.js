const { urlencoded } = require('express')
const express = require('express')
const app = express()
const foundationRouter = require('../routes/foundation')
const nonProfitRouter = require('../routes/nonprofit')
const logger = require('../src/logger')

app.set('view engine', 'ejs')
app.use(endpointLogger)
//app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/foundation', foundationRouter)
app.use('/nonprofit', nonProfitRouter)

function endpointLogger(req, res, next) {
    let scope = "server.endpointLogger():"
    logger.info(`${scope} ${req.originalUrl} endpoint called`)
    next()
}

app.listen(3000)
