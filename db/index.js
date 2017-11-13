const { Pool, Client } = require('pg')
const connectionString = 'postgresql://root:toor@127.0.0.1:5432/mydb'

const pool = new Pool({
    connectionString: connectionString,
})

pool.query('SELECT NOW()', (err, res) => {
    console.log(err, res)
})

const client = new Client({
    connectionString: connectionString,
})
client.connect()

client.query('SELECT NOW()', (err, res) => {
    console.log(err, res)
client.end()
})
module.exports = {
    query: (text, params, callback) => {
    return pool.query(text, params, callback)
}

}