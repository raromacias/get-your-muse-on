const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())


const { getMuses, createMuse, deleteMuse } = require('./controller')

app.get(`/getMuses`, getMuses)
app.post(`/createMuse`, createMuse)
app.delete('/deleteMuse/:id', deleteMuse)



app.listen(4000, () => console.log('Listening on port 4000'))