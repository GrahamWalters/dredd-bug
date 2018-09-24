var express = require('express');
var app = express();

app.use(express.json());


var obj = { key: "none" };

app.post('/', function(req, res) {
  res.setHeader('Content-Type', 'application/json');

  if (req.body.primarySite && req.body.primarySite.length > 25) {
    console.log('POST', req.body.primarySite);
    // Throw a failure
    res.setHeader('Content-Type', 'application/text');
  }

  res.send(JSON.stringify(obj));
});

app.put('/', function(req, res) {
  res.setHeader('Content-Type', 'application/json');

  if (req.body.primarySite && req.body.primarySite.length > 25) {
    console.log('PUT', req.body.primarySite);
    // Throw a failure
    res.setHeader('Content-Type', 'application/text');
  }

  res.send(JSON.stringify(obj));
});

var port = process.env.PORT || 3000;
app.listen(port);
console.log('Listening on localhost:'+ port);
