var express = require('express');
var app = express();
require('./routes.js')
//app.use('/',require('./routes.js') )
//app.get('/',function(req,res){res.end('hello route 1')})
var port = process.env.PORT || 3000
app.listen(port, function () {
  console.log('Example app listening on port '+port+'!')
})