const { Client } = require('pg')
require('dotenv').config({path: '../.env'})

function insertIntoFoundation(email) {
    const client = new Client()
    client.connect()

    const query = 'INSERT INTO foundation(email) VALUES($1)'
    const values = [email]

    client.query(query, values, (err, res) => {

        if(err) {
            console.log(err.message)
        } else {
            console.log(res)
        }
        client.end()
    })
}

function insertIntoNonProfit(email, name, address) {
    const client = new Client()
    client.connect()

    const query = 'INSERT INTO nonprofit(email, name, address) VALUES($1, $2, $3)'
    const values = [email, name, address]

    client.query(query, values, (err, res) => {
        if(err) {
            console.log(err.message)
        } else {
            console.log(res)
        }
        client.end()
    })
}

function getAllFromNonProfit() {
    const client = new Client()
    client.connect()

    const query = 'SELECT * from nonprofit'

    client.query(query, (err, res) => {
        if(err) {
            console.log(err.message)
        } else {
            console.log(res.rows)
        }
        client.end()
    })
}

function getEmailFromNonProfit() {
    const client = new Client()
    client.connect()

    const query = 'SELECT email from nonprofit'

    client.query(query, (err, res) => {
        if(err) {
            console.log(err.message)
        } else {
            console.log(res.rows)
        }
        client.end()
    })
}

// export {insertIntoFoundation}