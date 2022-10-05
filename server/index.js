require('dotenv').config()
const express = require('express')
const cors = require('cors')
const {SERVER_PORT} = process.env
const app = express()

app.use(express.json())
app.use(cors())


const { getMuses, createMuse, deleteMuse , updateQuote} = require('./controller')

app.get(`/getMuses`, getMuses)
app.post(`/createMuse`, createMuse)
app.delete('/deleteMuse/:id', deleteMuse)
app.put('/updateQuote/:id', updateQuote)



app.listen(4000, () => console.log('Listening on port 4000'))

app.listen(SERVER_PORT, () => console.log(`up on ${SERVER_PORT}`))