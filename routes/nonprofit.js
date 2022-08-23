const express = require('express')
const router = express.Router()

router.post('/create', (req,res) => {
    console.log(req.body.email)
    console.log(req.body.name)
    console.log(req.body.address)
    res.status(200).json({
        email: `${req.body.email}`,
        name: `${req.body.name}`,
        address: `${req.body.address}`, 
    })
})

module.exports = router