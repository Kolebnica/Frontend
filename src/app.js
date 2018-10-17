// load required packages
var express = require('express');
var path = require('path');

// initialize express
var app = express();

// serve files from "public" folder and "app" folder
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'app')));

// serve index.html
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'app', 'index.html'));
});

module.exports = app;

// start server on port 3000
app.listen(3000, () => console.log('SkipRope app listening on port 3000!'))