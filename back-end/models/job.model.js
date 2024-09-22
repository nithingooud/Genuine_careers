const { Timestamp } = require('mongodb')
const mongoose = require('mongoose')

const locations = {
    HYDERABAD: 'Hyderabad',
    BENGALURU: 'Bengaluru',
    GURGAON: 'Gurgaon',
    MUMBAI: 'Mumbai',
    CHENNAI: 'Chennai',
    PUNE: 'Pune',
    DELHI: 'Delhi',
    REMOTE: 'Remote'
}

const employmentTypes = {
    FULL_TIME: 'Full Time',
    INTERNSHIP: 'Internship'
}


const jobSchema = new mongoose.Schema({
    company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
    qualifications: [{ type: String }],
    responsibilities: [{ type: String }],
    skills: [{ type: String }],
    experience: { minimum: { type: Number }, maximum: { type: Number } },
    role: { type: String },
    location: { type: String, enum: Object.values(locations) },
    employmentType: { type: String, enum: Object.values(employmentTypes) },
    applyLink: { type: String }
}, { timestamps: true })

mongoose.model('Job', jobSchema)