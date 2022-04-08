var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Nosotros'); // view/Nosotros.hbs
});

module.exports = router;
