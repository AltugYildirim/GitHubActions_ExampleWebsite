const express = require('express');
const router = express.Router();

/* GET "who we are" page. */
router.get('/', (req, res) => {
  res.render('who', {
    title: 'SoftwareOne Turkey',   
  });
});

module.exports = router;