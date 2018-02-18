// We require/import the HTTP module
var http = require("http");

// =====================================================================

// Then define the ports we want to listen to
var PORTONE = 7000;
var PORTTWO = 7500;
var PORTTHREE = 8000;
var PORTFOUR = 8080;

// =====================================================================

// We need two different functions to handle requests, one for each server.
function handleRequestOne(request, response) {
  response.end("You're a JavaScript mastermind!");
}

function handleRequestTwo(request, response) {
  response.end("JavaScript must not be your forte.");
}

function handleRequestThree(request, response) {
  response.end("You're NEITHER a JavaScript mastermind NOR dummy!");
}

function handleRequestFour(request, response) {
  response.end("You are the king of html and css!");
}
// =====================================================================

// Create our servers
var serverOne = http.createServer(handleRequestOne);
var serverTwo = http.createServer(handleRequestTwo);
var serverThree = http.createServer(handleRequestThree);
var serverFour = http.createServer(handleRequestFour);



// =====================================================================

// Starting our servers
serverOne.listen(PORTONE, function() {

  // Callback triggered when server is successfully listening. Hurray!
  console.log("Server listening on: http://localhost:" + PORTONE);
});

serverTwo.listen(PORTTWO, function() {

  // Callback triggered when server is successfully listening. Hurray!
  console.log("Server listening on: http://localhost:" + PORTTWO);
});

serverThree.listen(PORTTHREE, function() {

  // Callback triggered when server is successfully listening. Hurray!
  console.log("Server listening on: http://localhost:" + PORTTHREE);
});

serverFour.listen(PORTFOUR, function() {

  // Callback triggered when server is successfully listening. Hurray!
  console.log("Server listening on: http://localhost:" + PORTFOUR);
});