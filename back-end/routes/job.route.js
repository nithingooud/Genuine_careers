const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const Job = mongoose.model('Job')
const Company = mongoose.model('Company')

router.use(bodyParser.json());


router.get('/jobsPosted', (req, res) => {
    res.send("hello user")
})

router.post('/addJob', async (req, res) => {
    try {
        const jobDetails = req.body;
        console.log(req.body)
        const result = await Job.create(jobDetails);
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
})

router.post('/addCompany', async (req, res) => {
    try {
        const companyDetails = req.body;
        const result = await Company.create(companyDetails);
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
})

router.get('/getCompanies', async (req, res) => {
    try {
        const result = await Company.find({}, { _id: 1, companyName: 1 });
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})


module.exports = router