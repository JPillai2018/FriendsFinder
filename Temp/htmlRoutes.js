var path = require("path");
console.log("I am in htmlRoutes.js");
// This file has GET Routes for default and /Survey
// =============================================================

module.exports = function(app){
  // Basic route that sends the user first to the AJAX Page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });
  
  //Route for View Reseravtions
  app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "survey.html"));
});

}


