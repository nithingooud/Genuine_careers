const express = require('express')
const { mongoose } = require('mongoose')
const env = require('dotenv').config();
const app = express()
const PORT = 2000
const cors = require('cors');


app.use(cors())

URI = process.env.MONGO_URL
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });


mongoose.connection.on('connected', () => {
    console.log("mongo connected successfully");
})

mongoose.connection.on('error', () => {
    console.log("error connecting in mongo")
})

require('./models/job.model')
require('./models/company.model')
require('./models/interviewExperience.model')
require('./models/blogs.model')
require('./models/notes.model')

app.use(require('./routes/job.route'))
app.use(require('./routes/interviewExperience.route'))
app.use(require('./routes/blogs.route'))
app.use(require('./routes/notes.route'))




app.listen(PORT, () => {
    console.log("server is running on port", PORT);
})