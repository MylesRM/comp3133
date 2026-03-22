var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res, next) {
  console.log('POST route hit');
  console.log(req.body);
  res.send('POST received!');
});

module.exports = router;