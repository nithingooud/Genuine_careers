const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const InterviewExperience = mongoose.model('InterviewExperience');

router.use(bodyParser.json());

router.post('/addInterviewExperience', async (req, res) => {
    try {
        console.log(req.body)
        const {
            companyName,
            candidateName,
            role,
            CTC,
            yoe,
            youtubeId
        } = req.body;

        const interviewDetails = {
            company: new mongoose.Types.ObjectId(companyName),
            candidateName: candidateName,
            role: role,
            CTC: CTC,
            yoe: yoe,
            youtubeId: youtubeId
        };
        console.log("interview", interviewDetails)
        let response = await InterviewExperience.create(interviewDetails);
        res.json(response)
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
})

router.post('/interviewExperiences', async (req, res) => {
    try {
        let query = {}
        console.log(req.body)
        if (req.body.company) {
            query = {
                ...(req.body.company != "" ? { company: req.body.company } : {})
            };
        }
        let response = await InterviewExperience.find(query).populate('company');
        res.json(response)
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
})


module.exports = router