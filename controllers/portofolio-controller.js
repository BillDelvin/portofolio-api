const mongoose = require('mongoose');
const portofolioModel = mongoose.model('portofolios');

module.exports = {
 getPortofolio: async (req, res, next) => {
  await portofolioModel
   .find({})
   .then(async (data) => {
    if (data) {
     return res.status(200).json(data);
    }
   })
   .catch((err) => {
    console.log(err);
   });
 },
 getPortofolioById: async (req, res) => {
  const { id } = req.params;
  try {
   const getPortofolioById = await portofolioModel.findById(id);
   if (getPortofolioById) {
    return res.status(200).json(getPortofolioById);
   } else {
    next();
   }
  } catch (error) {
   return res.status(400).json('API Error Message!');
  }
 },
 createPortofolio: async (req, res, next) => {
  const portofolioData = req.body;
  // todo : extract from req
  const userId = 'google-oauth2|110698770403998481124';
  const portofolio = new portofolioModel(portofolioData);
  portofolio.userId = userId;

  try {
   const newPortofolio = await portofolio.save();
   return res.status(200).json(newPortofolio);
  } catch (error) {
   return res.status(400).json('API Error Message!');
  }
 },
};
