const { urlencoded } = require('express')
const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(logger)
//app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get('/', logger, (req, res) => {
    console.log('Here')
    res.status(200).json({message: "Hello World"})
})

const foundationRouter = require('./routes/foundation')
const nonProfitRouter = require('./routes/nonprofit')

app.use('/foundation', foundationRouter)
app.use('/nonprofit', nonProfitRouter)

function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}

app.listen(3000)


