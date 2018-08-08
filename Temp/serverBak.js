// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
// Requesting Different files 
// Requesting (data/friends.js)
//var friends = require("./app/data/friends.js");
require("./app/data/friends.js");
// Requesting (htmlRoutes.js)
require("./htmlRoutes.js");
// Requesting (apiRoutes.js)
require("./apiRoutes.js");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;
// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("Friend Finder Running at Port:" + PORT);
});

app.get('/', function (req, res) {
  res.send('FRIENDS FINDER Application in Action!!!')
})


