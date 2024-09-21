const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    heading: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    tags: [String],
}, { timestamps: true });

mongoose.model('Blogs', blogSchema)