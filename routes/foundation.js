const express = require('express')
const router = express.Router()
const Postgres = require('../src/postgres')
const logger = require('../src/logger')

const postgres = new Postgres()

router.post('/create', (req,res) => {
    let scope = "foundation.post.create():"
    logger.debug(`Entering ${scope}`)
    logger.debug(`${scope} ${req.body.email}`)

    postgres.insertIntoFoundation(req.body.email)

    res.sendStatus(200) //.status(200).json({email: `${req.body.email}`})
})

router.post('/send', (req, res) => {
    let scope = "foundation.post.send():"
    logger.debug(`Entering ${scope}`)
    logger.debug(`${scope} ${req.body.senderEmail}`)
    logger.debug(`${scope} ${req.body.message}`)
    logger.debug(`${scope} ${req.body.recipientEmails}`)

    sendEmails(req.body.senderEmail, req.body.message, req.body.recipientEmails)

    res.sendStatus(200) //.status(200).json({
    //     senderEmail: `${req.body.senderEmail}`,
    //     name: `${req.body.message}`,
    //     recipientEmails: `${req.body.recipientEmails}`, 
    // })
})

 async function sendEmails(senderEmail, message, recipientEmails) {
    let scope = "foundation.sendEmails():"
    logger.debug(`Entering ${scope}`)

    for(var i = 0; i < recipientEmails.length; i++) {
        var nonProfitName = await postgres.getNameFromNonProfit(recipientEmails[i]) 
        var nonProfitAddress =  await postgres.getAddressFromNonProfit(recipientEmails[i])

        var finalMessage = message.replace(/{ email }/g, recipientEmails[i])
        finalMessage = finalMessage.replace(/{ name }/g, nonProfitName)
        finalMessage = finalMessage.replace(/{ address }/g, nonProfitAddress)

        sendEmail(senderEmail, finalMessage, recipientEmails[i]) 
    }
}

function sendEmail(senderEmail, message, recipientEmail) {
    let scope = "foundation.sendEmail():"
    logger.debug(`Entering ${scope}`)
    logger.audit(`${scope} (${senderEmail}, ${message}, ${recipientEmail})`)

    //in real world application probablty have a class specific to the emailer
    logger.audit(`Sending Email: 
        from ${senderEmail} 
        to ${recipientEmail}
        messasge: ${message}\n`)
}

module.exports = router
