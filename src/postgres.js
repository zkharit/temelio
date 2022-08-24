const { Client } = require('pg')
require('dotenv').config({path: '.env'})

class Postgres {
    constructor () {}

    insertIntoFoundation(email) {
        const client = new Client()
        client.connect()
    
        const query = 'INSERT INTO foundation(email) VALUES($1)'
        const values = [email]
    
        client.query(query, values, (err, res) => {
    
            if(err) {
                console.log(err.message)
            } else {
                // console.log(res.rows)
                // will add this to specific logging levels later
            }
            client.end()
        })
    }
    
    insertIntoNonProfit(email, name, address) {
        const client = new Client()
        client.connect()
    
        const query = 'INSERT INTO nonprofit(email, name, address) VALUES($1, $2, $3)'
        const values = [email, name, address]
    
        client.query(query, values, (err, res) => {
            if(err) {
                console.log(err.message)
            } else {
                // console.log(res.rows)
                // will add this to specific logging levels later
            }
            client.end()
        })
    }
    
    getAllFromNonProfit() {
        const client = new Client()
        client.connect()
    
        const query = 'SELECT * from nonprofit'
    
        client.query(query, (err, res) => {
            if(err) {
                console.log(err.message)
            } else {
                // console.log(res.rows)
                // will add this to specific logging levels later
            }
            client.end()
        })
    }
    
    getEmailFromNonProfit() {
        const client = new Client()
        client.connect()
    
        const query = 'SELECT email from nonprofit'
    
        client.query(query, (err, res) => {
            if(err) {
                console.log(err.message)
            } else {
                // console.log(res.rows)
                // will add this to specific logging levels later
            }
            client.end()
        })
    }
}

module.exports = Postgres