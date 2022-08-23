const express = require('express')
const router = express.Router()

router.post('/create', (req,res) => {
    console.log(req.body.email)
    res.status(200).json({email: `${req.body.email}`})
})

// might want to move audit logger to server.js or maybe another file
router.post('/send', auditLogger, (req, res) => {
    console.log(req.body.senderEmail)
    console.log(req.body.message)
    console.log(req.body.recipientEmails)
    res.status(200).json({
        senderEmail: `${req.body.senderEmail}`,
        name: `${req.body.message}`,
        recipientEmails: `${req.body.recipientEmails}`, 
    })
})

function auditLogger(req, res, next) {
    // audit logger
    console.log("Logging Sent Emails")
    next()
}

module.exports = router
