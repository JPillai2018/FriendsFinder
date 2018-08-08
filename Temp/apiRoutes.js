// This file contains API Routes
// Restaurant api
// GET API Route for /api/friends
console.log("I am in apiRoutes.js");

// Importing Existing Friends Profile (DATA)
// =============================================================
var Fprofile = require("../data/friends.js");
var friendprofile = Fprofile.friendprofile;
var myprofile = Fprofile.myprofile;

module.exports = function(app) {

// Restaurant api
app.get('/', function (req, res) {
  res.send('FRIENDS FINDER Application in Action!!!')
 })

// Displays all reservations
app.get("/api/friends", function(req, res) {
    return res.json(friendprofile);
  });

  // POST API Route for /api/friends
// Updating/POSTING the Friends Profile 
app.post("/api/friends", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newfriend = req.body;
  console.log("Incoming Data = " + req.body);
  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  //newreservation.name = newreservation.name.replace(/\s+/g, "").toLowerCase();
  
  myprofile.length = 0;
  console.log("My Profile=" + newfriend);

  // Adding the Applicant to my profile for comparison
  myprofile.push(newfriend);

  console.log("Array Value = " + myprofile.length);
  console.log("MyProfile Data=" + myprofile);
  //res.json(myprofile);

  var bestMatchIndex = findMatch(friendprofile, myprofile);
  res.json(friendprofile[bestMatchIndex]);

  // Adding the Applicant to the list of friends, after search is completed.
  console.log("Friends Profile Size= " + friendprofile.length);
  console.log("FriendsProfile Data=" + friendprofile);
  friendprofile.push(newfriend);
  console.log("Added your Profile to Friends Profile");
  console.log("Friends Profile Size= " + friendprofile.length);
});

// Function to find the best match for the applicant with the existing friends profile.
function findMatch(fProfile, mProfile){
  var resultScoreArray = [];
  var fProfScore = fProfile.scores;
  var mProfScore = mProfile[0].scores;
  console.log("FriendsProfile Length = " + fProfile.length);
  for (var i = 0; i<fProfile.length; i++){
      var fprofScore = fProfile[i].scores;
      var netScore = 0;
      console.log ("Friends Profile Scores [" + i + "] =" + fprofScore);
      // Score calculation begins
      for (var j=0; j<10; j++){
        var diffScore = Math.abs(parseInt(fprofScore[j]) - parseInt(mProfScore[j]));
        netScore = netScore + diffScore;
      }
      resultScoreArray.push(netScore);
      console.log("Result Array = " + resultScoreArray);

      // Find the index of the lowest score, just so we can get the correct profile from the Friends Profile Array
      var min = resultScoreArray[0];
      var minIndex = 0;
      for (var k=1; k < resultScoreArray.length; k++){
        if (parseInt(resultScoreArray[k]) < parseInt(min)){
          minIndex = k;
          min = resultScoreArray[k];
        }
      }
      //resultScoreArray.sort();
      console.log("Result Array = " + resultScoreArray);
      console.log("Position of the Lowest Score = " + minIndex);
  }
  return minIndex;
}
}

