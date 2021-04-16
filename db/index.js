const mongoose = require('mongoose');
const config = require('../config/dev');

module.exports = {
 dbConnection: async () => {
  await mongoose.connect(
   config.DB_URI,
   {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
   },
   (err) => {
    if (err) console.log(err);
    else console.log('Connected to DB!');
   },
  );
 },
};
