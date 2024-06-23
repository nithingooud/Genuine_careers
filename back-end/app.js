const express = require('express')
const { mongoose } = require('mongoose')
const app = express()
const PORT = 2000
const cors = require('cors');

app.use(cors())

mongoose.connect('mongodb://localhost:27017')

mongoose.connection.on('connected', () => {
    console.log("mongo connected succesfully");
})

mongoose.connection.on('error', () => {
    console.log("error connecting in mongo")
})

require('./models/job.model')
require('./models/company.model')

app.use(require('./routes/job.route'))


app.get('/', (req, res) => {
    console.log("home")
    res.send("Hello Wmorld")
})

app.listen(PORT, () => {
    console.log("server is running on port", PORT);
})