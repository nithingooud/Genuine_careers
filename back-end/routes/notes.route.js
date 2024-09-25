const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const Notes = mongoose.model('Notes');

router.post('/upload-notes', async (req, res) => {
    try {
        const {
            name,
            title,
            subtitle,
            description,
            contents,
            benefits,
            previewImages,
            cost,
            whatsAppLinK
        } = req.body;
        const notesDetails = {
            name,
            title,
            subtitle,
            description,
            contents,
            benefits,
            previewImages,
            cost,
            whatsAppLinK
        };


        const result = await Notes.create(notesDetails);
        res.json(result);
    } catch (err) {
        console.error('Error adding Notes:', err);
        res.status(500).json({ error: err.message, stack: err.stack });
    }

})

router.post('/notes', async (req, res) => {
    try {
        const notesDetails = await Notes.find({ name: req.body.notes });
        res.json(notesDetails)
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
})

module.exports = router