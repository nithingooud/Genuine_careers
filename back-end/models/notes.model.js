const mongoose = require('mongoose');

const notesSchema = new mongoose.Schema({
    name: { type: String, required: true },
    title: {
        type: String
    },
    subtitle: {
        type: String
    },
    description: {
        type: String,
    },
    contents: [String],
    benefits: [String],
    previewImages: [String],
    cost: { type: String },
    whatsAppLinK: { type: String }
}, { timestamps: true }).index({ name: 1 }, { unique: true });

mongoose.model('Notes', notesSchema)