const { urlencoded } = require('express')
const express = require('express')
const app = express()
const foundationRouter = require('../routes/foundation')
const nonProfitRouter = require('../routes/nonprofit')
const logger = require('../src/logger')
var { initialize } = require("express-openapi");
var swaggerUi = require("swagger-ui-express");

app.set('view engine', 'ejs')
app.use(endpointLogger)
//app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/foundation', foundationRouter)
app.use('/nonprofit', nonProfitRouter)

// Initialize OpenAPI
initialize({
    app,
    apiDoc: require("../api-v0.1.0/api-doc"),
    paths: "./api/paths",
  });

// OPenAPI UI
app.use(
    "/api-documentation",
    swaggerUi.serve,
    swaggerUi.setup(null, {
      swaggerOptions: {
        url: "http://localhost:3000/api-documentation",
      },
    })
  );

function endpointLogger(req, res, next) {
    let scope = "server.endpointLogger():"
    logger.info(`${scope} ${req.originalUrl} endpoint called`)
    next()
}

app.listen(3000)
