const mongoose = require('mongoose')

const jobSchema = new mongoose.Schema({
    logo: { type: String },
    CompanyName: { type: String },
    Position: { type: String },
    Experience: { minimum: { type: Number }, maximum: { type: Number } },
    Location: { type: String },
    Qualifications: [{ type: String }],
    CompanyDescription: { type: String },
    Responsibilties: [{ type: String }]
})

mongoose.model('Job', jobSchema)