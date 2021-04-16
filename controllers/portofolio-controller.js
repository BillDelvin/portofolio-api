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
};
