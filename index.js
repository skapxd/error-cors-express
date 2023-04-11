'use strict';

const express = require('express');
const path = require('path');
const app = express()

// With middleware
app.use('/', function (req, res, next) {

  const fileName = 'img.png';

  const options = {
    root: path.join(__dirname)
  };

  const allowedOrigin = 'http://localhost:3000'

  res.header('Access-Control-Allow-Origin', allowedOrigin);
  res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Credentials', true);


  res.sendFile(fileName, options, function (err) {
    if (err) {
      next(err);
    } else {
      console.log('Sent:', fileName);
      next();
    }
  });
});

const port = 3025
app.listen(port);
console.log(`Express started on port: ${port}`);
