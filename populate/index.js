const mongoose = require('mongoose');
const config = require('../config/dev');
const fakeDB = require('./FakeDB');

mongoose.connect(
 config.DB_URI,
 {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
 },
 async (err) => {
  if (err) console.log(err);
  else {
   console.log('> Starting population DB!');
   await fakeDB.populate();
   await mongoose.connection.close();
   console.log('> DB has been population...');
  }
 },
);
