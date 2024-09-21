const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const MyBlogs = mongoose.model('Blogs');

router.use(bodyParser.json());

router.get('/api/blogs', async (req, res) => {
    try {
        const blogs = await MyBlogs.find().sort({ _id: -1 });
        res.json(blogs);
    } catch (error) {
        res.status(500).json({ error: 'Server error while fetching blogs' });
    }
});

router.get('/api/blogs/:id', async (req, res) => {
    try {
        const blog = await MyBlogs.findById(req.params.id); // Fetch blog by ID from MongoDB
        if (!blog) {
            return res.status(404).json({ error: 'Blog not found' });
        }
        res.json(blog); // Send blog data as JSON response
    } catch (error) {
        res.status(500).json({ error: 'Server error while fetching the blog' });
    }
});

router.post('/api/blogs', async (req, res) => {
    const { heading, content, author, tags } = req.body;

    try {
        const newBlog = new MyBlogs({
            heading,
            content,
            author,
            tags,
        });

        const savedBlog = await newBlog.save();

        res.status(200).json(savedBlog); // Send back the newly created blog
    } catch (error) {
        res.status(500).json({ error: 'Server error while saving the blog' });
    }
});

module.exports = router