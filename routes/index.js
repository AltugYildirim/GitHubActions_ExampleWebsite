const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', {
    title: 'Microsoft AKS OpenHack etkinliğine hoş geldiniz! Umarım keyifli bir demo olur!',   
  });
});

module.exports = router;