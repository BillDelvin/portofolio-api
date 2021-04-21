const express = require('express');
const server = express();
const bodyParser = require('body-parser');

const dbConnection = require('./db');

const portofolioRoutes = require('./routes/portofolio-routes');

dbConnection.connect();

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use('/api/v1', portofolioRoutes);

const PORT = parseInt(process.env.PORT, 10) || 3001;

server.listen(PORT, (err) => {
 if (err) console.log(err);

 console.log('server ready on port : ', PORT);
});
