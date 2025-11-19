const express = require('express')
const { mongoose } = require('mongoose')
const env = require('dotenv').config();
const app = express()
const PORT = process.env.PORT || 2000
const cors = require('cors');

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// CORS configuration - allow requests from frontend
app.use(cors({
    origin: ['http://13.203.94.160:3000', 'http://localhost:3000'],
    credentials: true
}))

URI = process.env.MONGO_URL || "mongodb://localhost:27017"
mongoose.connect(URI);


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