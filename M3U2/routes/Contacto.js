var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Contacto'); //view/Contacto.hbs
});

module.exports = router;
