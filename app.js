const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')
const cors = require('cors');

const app = express()
const port = process.env.PORT || 8000

app.use(bodyParser.urlencoded({extended: false}))
app.use(cors());
app.use(bodyParser.json())

// MySQL
const pool= mysql.createPool({
    connectionLimit :   10,
    host:               'localhost',
    user:               'root',
    password:           null,
    database:           'csaladfa'
})

//show tables
app.get('', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        connection.query('show tables; ', (err, rows) => {
            connection.release()

            if(!err) {
                res.send(rows)
            } else {
                console.log(err)
            }
        })
    })
})

// users tábla kilistázása
app.get('/csaladtagok', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        connection.query('SELECT * FROM csaladtagok', (err, rows) => {
            connection.release()

            if(!err) {
                res.send(rows)
            } else {
                console.log(err)
            }
        })
    })
})
app.listen(port, () => console.log(`Listening on port ${port}`)) 