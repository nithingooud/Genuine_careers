const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const bodyParser = require('body-parser');


const Job = mongoose.model('Job')
router.use(bodyParser.json());


router.get('/jobsPosted', (req, res) => {
    res.send("hello user")
})

router.post('/post', async (req, res) => {
    try {
        const jobDetails = req.body;
        const result = await Job.create(jobDetails);
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
})


module.exports = router