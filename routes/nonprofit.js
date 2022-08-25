const express = require('express')
const router = express.Router()
const Postgres = require('../src/postgres')
const logger = require('../src/logger')

const postgres = new Postgres()

router.post('/create', (req,res) => {
    let scope = "nonprofit.post.create():"
    logger.debug(`Entering ${scope}`)
    logger.debug(`${scope} ${req.body.email}`)
    logger.debug(`${scope} ${req.body.name}`)
    logger.debug(`${scope} ${req.body.address}`)

    postgres.insertIntoNonProfit(req.body.email, req.body.name, req.body.address)

    res.sendStatus(200)     //.status(200).json({
    //     email: `${req.body.email}`,
    //     name: `${req.body.name}`,
    //     address: `${req.body.address}`, 
    // })
})

module.exports = router
