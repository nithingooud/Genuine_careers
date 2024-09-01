const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const Job = mongoose.model('Job')
const Company = mongoose.model('Company')

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


router.use(bodyParser.json());

function getDateFilter(jobspostedIn) {
    const currentDate = new Date();
    let filterDate;

    switch (jobspostedIn) {
        case "last 24 hrs":
            filterDate = new Date(currentDate.getTime() - 24 * 60 * 60 * 1000);
            break;
        case "last week":
            filterDate = new Date(currentDate.setDate(currentDate.getDate() - currentDate.getDay()));
            break;
        case "last month":
            filterDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
            break;
        default:
            return {};
    }

    return { createdAt: { $gte: filterDate } };
}

//render jobs per page
router.post('/jobsPosted', async (req, res) => {
    try {
        const page = parseInt(req.body.page) || 1;
        const limit = 5;
        const skip = (page - 1) * limit;
        let query = {}
        if (req.body.filters) {
            query = {
                ...(req.body.filters.employmentType != "" ? { employmentType: req.body.filters.employmentType } : {}),
                ...(req.body.filters.experience != "" ? { "experience.minimum": { $lte: parseInt(req.body.filters.experience) } } : {}),
                ...(req.body.filters.experience != "" ? { "experience.maximum": { $gte: parseInt(req.body.filters.experience) } } : {}),
                ...(req.body.filters.location != "" ? { location: req.body.filters.location } : {}),
                ...(req.body.filters.role != "" ? { role: req.body.filters.role } : {}),
                ...(req.body.filters.jobspostedIn != "" ? { ...getDateFilter(req.body.filters.jobspostedIn) } : {})
            };
        }
        const jobs = await Job.find(query).skip(skip).limit(5).populate('company').sort({ _id: -1 });
        const totalFilteredCount = await Job.countDocuments(query);

        res.json({
            jobs: jobs,
            totalFilteredCount: totalFilteredCount
        });
    } catch (err) {
        res.status(500).json((err) => { error: err })
    }
})



//to create a job
router.post('/addJob', async (req, res) => {
    try {
        const {
            company,
            position,
            experienceMin,
            experienceMax,
            location,
            role,
            qualifications,
            responsibilities,
            skills,
            employmentType,
            applyLink
        } = req.body;

        if (!Object.values(roles).includes(role)) {
            return res.status(400).json({ error: 'Invalid role' });
        }

        // Validate location
        if (!Object.values(locations).includes(location)) {
            return res.status(400).json({ error: 'Invalid location' });
        }

        // Validate employmentType
        if (!Object.values(employmentTypes).includes(employmentType)) {
            return res.status(400).json({ error: 'Invalid employment type' });
        }

        const jobDetails = {
            company: new mongoose.Types.ObjectId(company),
            position,
            experience: {
                minimum: experienceMin,
                maximum: experienceMax
            },
            location,
            role,
            qualifications,
            responsibilities,
            skills,
            employmentType,
            applyLink
        };

        const result = await Job.create(jobDetails);
        res.json(result);
    } catch (err) {
        console.error('Error adding job:', err);
        res.status(500).json({ error: err.message, stack: err.stack });
    }
})

router.post('/job', async (req, res) => {
    try {
        const jobDetails = await Job.findById(req.body._id).populate('company');
        res.json(jobDetails)
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