const { Timestamp } = require('mongodb')
const mongoose = require('mongoose')

const locations = {
    HYDERABAD: 'Hyderabad',
    BENGALURU: 'Bengaluru',
    GURGAON: 'Gurgaon',
    MUMBAI: 'Mumbai',
    CHENNAI: 'Chennai',
    PUNE: 'Pune',
    DELHI: 'Delhi'
}

const employmentTypes = {
    FULL_TIME: 'Full Time',
    INTERNSHIP: 'Internship'
}

const roles = {
    SOFT: 'Software Engineer',
    SDE: 'SDE',
    QA: 'Quality Analyst',
    MARKETING_SPECIALIST: 'Marketing Specialist',
    WEB_DESIGNER: 'Web Designer',
    APP_DEVELOPER: 'App Developer',
    DATA_ENGINEER: 'Data Engineer',
    WEB_DEVELOPER: 'Web Developer'
}

const jobSchema = new mongoose.Schema({
    company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
    qualifications: [{ type: String }],
    responsibilities: [{ type: String }],
    skills: [{ type: String }],
    experience: { minimum: { type: Number }, maximum: { type: Number } },
    role: { type: String, enum: Object.values(roles) },
    location: { type: String, enum: Object.values(locations) },
    employmentType: { type: String, enum: Object.values(employmentTypes) },
    applyLink: { type: String }
}, Timestamp)

mongoose.model('Job', jobSchema)