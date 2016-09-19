'use strict';

const express = require('express');
const app = express();
const expressWs = require('express-ws')(app);

 
app.get('/', function(req, res, next){
  res.end('Just try connecting to wss://ws.now.sh');
});
 
app.ws('/', function(ws, req) {
  ws.on('message', function(msg) {
    console.log(msg);
  });
  console.log('socket', req.testing);
});
 
app.listen(80);
