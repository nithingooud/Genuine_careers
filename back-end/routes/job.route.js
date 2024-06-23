const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const Job = mongoose.model('Job')
const Company = mongoose.model('Company')

router.use(bodyParser.json());

//render jobs per page
router.post('/jobsPosted', async (req, res) => {
    try {
        const page = parseInt(req.body.page) || 1;
        const limit = 5;
        const skip = (page - 1) * limit;
        const jobs = await Job.find({}).skip(skip).limit(5).populate('company').sort({ _id: -1 });
        res.json(jobs)
    } catch (err) {
        res.status(500).json((err) => { error: err })
    }
})

//count Documents
router.get('/countOfJobs', async (req, res) => {
    try {
        const count = await Job.countDocuments();
        res.json(count);
    } catch (err) {
        res.status(500).json((err) => { error: err })
    }
})

//to create a job
router.post('/addJob', async (req, res) => {
    try {
        const { company, experienceMin, experienceMax, location, position, qualifications, responsibilities, skills } = req.body;

        const experience = {
            minimum: experienceMin,
            maximum: experienceMax
        };

        const jobDetails = {
            company: new mongoose.Types.ObjectId(company), // Convert company to ObjectId
            experience,
            location,
            position,
            qualifications,
            responsibilities,
            skills
        };

        const result = await Job.create(jobDetails);
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
})


//to create a company
router.post('/addCompany', async (req, res) => {
    try {
        const companyDetails = req.body;
        const result = await Company.create(companyDetails);
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
})

//to render companies list
router.get('/getCompanies', async (req, res) => {
    try {
        const result = await Company.find({}, { _id: 1, companyName: 1 });
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})


module.exports = router