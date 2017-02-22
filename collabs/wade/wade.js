var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.write("Hello from Wade");
  res.end();
});

module.exports = router;
