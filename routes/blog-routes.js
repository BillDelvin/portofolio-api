const express = require('express');
const router = express.Router();
const BlogController = require('../controllers/blog-controller');
const { checkJwt, checkRole } = require('../controllers/auth');

router.get('/blogs', BlogController.getBlogs);
router.get('/blogs/:blogsId', BlogController.getBlogsById);
router.get('/blogs/slug/:slug', BlogController.getBlogsBySlug);

module.exports = router;
