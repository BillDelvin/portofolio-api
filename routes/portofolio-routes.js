const express = require('express');
const router = express.Router();
const portofolioController = require('../controllers/portofolio-controller');

router.get('/portoflios', portofolioController.getPortofolio);

module.exports = router;
