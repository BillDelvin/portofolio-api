const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const portofolioSchema = new Schema({
 userId: { type: String, required: true, maxLength: 128 },
 title: { type: String, required: true, maxLength: 128 },
 company: { type: String, required: true, maxLength: 64 },
 companyWebsite: { type: String, required: true, maxLength: 64 },
 location: { type: String, required: true },
 jobTitle: { type: String, required: true },
 description: { type: String, required: true },
 startDate: { type: Date, required: true },
 endDate: { type: Date },
 createdAt: { type: Date, default: Date.now() },
});

module.exports = mongoose.model('portofolios', portofolioSchema);
