const express = require('express')
const router = express.Router()
const Postgres = require('../src/postgres')

const postgres = new Postgres()

router.post('/create', (req,res) => {
    // console.log(req.body.email)
    // will add this to specific logging levels later
    postgres.insertIntoFoundation(req.body.email)

    res.sendStatus(200) //.status(200).json({email: `${req.body.email}`})
})

// might want to move audit logger to server.js or maybe another file
router.post('/send', auditLogger, (req, res) => {
    // console.log(req.body.senderEmail)
    // console.log(req.body.message)
    // console.log(req.body.recipientEmails)
    // will add this to specific logging levels later
    res.status(200).json({
        senderEmail: `${req.body.senderEmail}`,
        name: `${req.body.message}`,
        recipientEmails: `${req.body.recipientEmails}`, 
    })
})

function auditLogger(req, res, next) {
    // audit logger
    // console.log("Logging Sent Emails")
    // will add this to specific logging levels later
    next()
}

module.exports = router
