'use strict';

var express = require('express');
var app = express();
var path = require('path');
var whoami = require('./requestHeaderParserRouter');

//setup public folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/whoami', whoami);

app.listen(process.env.PORT || 8080, function () {
  console.log('Example app listening on port 8080!');
});