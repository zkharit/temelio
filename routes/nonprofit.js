const express = require('express')
const router = express.Router()
const Postgres = require('../src/postgres')

const postgres = new Postgres()

router.post('/create', (req,res) => {
    // console.log(req.body.email)
    // console.log(req.body.name)
    // console.log(req.body.address)
    // will add this to specific logging levels later
    postgres.insertIntoNonProfit(req.body.email, req.body.name, req.body.address)

    res.sendStatus(200)     //.status(200).json({
    //     email: `${req.body.email}`,
    //     name: `${req.body.name}`,
    //     address: `${req.body.address}`, 
    // })
})

module.exports = router
