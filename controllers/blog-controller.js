const mongoose = require('mongoose');
const blogModel = mongoose.model('blogs');

module.exports = {
 getBlogs: async (req, res, next) => {
  try {
   const blogs = await blogModel.find({ status: 'published' }).sort({ createdAt: -1 });
   return res.status(200).json(blogs);
  } catch (error) {
   return res.status(400).json(error);
  }
 },
 getBlogsById: async (req, res, next) => {
  const { blogsId } = req.params;
  try {
   const blogs = await blogModel.findById(blogsId);
   return res.status(200).json(blogs);
  } catch (error) {
   return res.status(400).json(error);
  }
 },

 getBlogsBySlug: async (req, res, next) => {
  const { slug } = req.params;
  try {
   const blogs = await blogModel.findOne({ slug });
   return res.status(200).json(blogs);
  } catch (error) {
   return res.status(400).json(error);
  }
 },
};
