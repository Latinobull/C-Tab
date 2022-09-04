const router = require('express').Router();
require('dotenv').config();
router.get('/fetch', function (req, res) {
  res.json(
    `https://www.google.com/maps/embed/v1/place?key=${process.env.apiKey}&q=616+Jamaica+Ave,+Brooklyn,+NY+11208`
  );
});

module.exports = router;
