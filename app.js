const express = require('express')
const path = require('path')

const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

// app.use(express.static(path.resolve(__dirname, 'client', 'build')))

require('./routes/login')(app)

app.get('/', (req, res) => {
  if (process.env.NODE_ENV === 'production') {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  }
})

const PORT = process.env.PORT || 5000

app.listen(PORT)