const { Client } = require('pg')
require('dotenv').config({path: '.env'})
const logger = require('../src/logger')

class Postgres {
    constructor () {}

    insertIntoFoundation(email) {
        let scope = "postgres.insertIntoFoundation():"
        logger.debug(`Entering ${scope}`)
        const client = new Client()
        client.connect()
    
        const query = 'INSERT INTO foundation(email) VALUES($1)'
        const values = [email]
    
        client.query(query, values, (err, res) => {
    
            if(err) {
                logger.error(`${scope} ${err.message}`)
            } else {
                logger.debug(`${scope} inserted ${email} into foundation DB`)
            }
            client.end()
        })
    }
    
    insertIntoNonProfit(email, name, address) {
        let scope = "postgres.insertIntoNonProfit():"
        logger.debug(`Entering ${scope}`)
        const client = new Client()
        client.connect()
    
        const query = 'INSERT INTO nonprofit(email, name, address) VALUES($1, $2, $3)'
        const values = [email, name, address]
    
        client.query(query, values, (err, res) => {
            if(err) {
                logger.error(`${scope} ${err.message}`)
            } else {
                logger.debug(`${scope} inserted ${email} into nonprofit DB`)
            }
            client.end()
        })
    }
    
    async getNameFromNonProfit(email) {
        let scope = "postgres.getNameFromNonProfit():"
        logger.debug(`Entering ${scope}`)
        const client = new Client()
        client.connect()
    
        const query = 'SELECT name from nonprofit where email = $1'
        const values = [email]
    
        const { rows } = await client.query(query, values)

        logger.debug(`${scope} got nonprofit: ${email} with name: ${rows[0].name}`)

        client.end()
        return rows[0].name
    }

    async getAddressFromNonProfit(email) {
        let scope = "postgres.getAddressFromNonProfit():"
        logger.debug(`Entering ${scope}`)
        const client = new Client()
        client.connect()
    
        const query = 'SELECT address from nonprofit where email = $1'
        const values = [email]
        
        const { rows } = await client.query(query, values)

        logger.debug(`${scope} got nonprofit: ${email} with addresss: ${rows[0].address}`)

        client.end()
        return rows[0].address
    }
}

module.exports = Postgres