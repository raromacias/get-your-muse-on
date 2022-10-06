require('dotenv').config()
const express = require('express')
const cors = require('cors')
const {SERVER_PORT} = process.env
const app = express()
const {seed} = require('./seed')
const path = require('path')

app.use(express.json())
app.use(cors())

app.post('/seed', seed)

const { getMuses, createMuse, deleteMuse , updateQuote} = require('./controller')

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'))
  })
  app.get('/hex', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/hex.html'))
  })
  app.get('/css', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/styles.css'))
  })
  app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/main.js'))
  })
  app.get('/hexjs', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/hex.js'))
  })


app.get(`/getMuses`, getMuses)
app.post(`/createMuse`, createMuse)
app.delete('/deleteMuse/:id', deleteMuse)
app.put('/updateQuote/:id', updateQuote)



// app.listen(4000, () => console.log('Listening on port 4000'))

app.listen(SERVER_PORT, () => console.log(`up on ${SERVER_PORT}`))