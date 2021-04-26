const express = require('express');
const router = express.Router();
const portofolioController = require('../controllers/portofolio-controller');
const { checkJwt, checkRole } = require('../controllers/auth');

router.get('/portofolios', portofolioController.getPortofolio);
router.get('/portofolios/:id', portofolioController.getPortofolioById);

// creatin middleware for check admin rights!!
router.post('/portofolios', checkJwt, checkRole('admin'), portofolioController.createPortofolio);

router.patch(
 '/portofolios/:id',
 checkJwt,
 checkRole('admin'),
 portofolioController.updatedPortofolio,
);

router.delete(
 '/portofolios/:id',
 checkJwt,
 checkRole('admin'),
 portofolioController.deletePortofolio,
);

module.exports = router;
