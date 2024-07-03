
const mongoose = require('mongoose')

const interviewExperienceSchema = new mongoose.Schema({
    company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
    CTC: { type: Number },
    role: { type: String },
    youtubeId: { type: String },
    candidateName: { type: String },
    yoe: { type: Number }
}, { timestamps: true })

mongoose.model('InterviewExperience', interviewExperienceSchema)