const mongoose = require('mongoose')

const jobSchema = new mongoose.Schema({
    company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
    position: { type: String },
    experience: { minimum: { type: Number }, maximum: { type: Number } },
    location: { type: String },
    qualifications: [{ type: String }],
    responsibilities: [{ type: String }],
    skills: [{ type: String }]
})

mongoose.model('Job', jobSchema)