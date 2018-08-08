var path = require("path");
//console.log("In htmlRoutes.js");
// This file has GET Routes for default and /Survey
// =============================================================

module.exports = function (app) {
  // Basic route that sends the user first to the AJAX Page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/index.html"));
  });
  
  //Route for View Reseravtions
  app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "/../public/survey.html"));
});
}


