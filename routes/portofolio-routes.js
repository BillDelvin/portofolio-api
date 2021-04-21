const express = require('express');
const router = express.Router();
const portofolioController = require('../controllers/portofolio-controller');

router.get('/portofolios', portofolioController.getPortofolio);
router.get('/portofolios/:id', portofolioController.getPortofolioById);

module.exports = router;
