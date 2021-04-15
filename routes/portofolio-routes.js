const express = require('express');
const router = express.Router();

router.get('/portoflios', (req, res) => {
 return res.status(200).json({ data: [1, 2, 3, 4] });
});

module.exports = router;
