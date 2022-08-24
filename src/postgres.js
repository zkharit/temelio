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
    
    async getNameFromNonProfit(email) {
        const client = new Client()
        client.connect()
    
        const query = 'SELECT name from nonprofit where email = $1'
        const values = [email]
    
        const { rows } = await client.query(query, values)

        // console.log(rows)
        // will add this to specific logging levels later

        client.end()
        return rows[0].name
    }

    async getAddressFromNonProfit(email) {
        const client = new Client()
        client.connect()
    
        const query = 'SELECT address from nonprofit where email = $1'
        const values = [email]
        
        const { rows } = await client.query(query, values)

        // console.log(rows)
        // will add this to specific logging levels later

        client.end()
        return rows[0].address
    }
}

module.exports = Postgres