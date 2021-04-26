const express = require('express');
const router = express.Router();
const portofolioController = require('../controllers/portofolio-controller');
const { checkJwt } = require('../controllers/auth');

router.get('/portofolios', portofolioController.getPortofolio);
router.get('/portofolios/:id', portofolioController.getPortofolioById);
router.post('/portofolios', checkJwt, portofolioController.createPortofolio);

module.exports = router;
