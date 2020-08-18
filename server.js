// basic server using Express
// pull in Express.js and path
var express = require("express");
var path = require("path");
// Sets up the Express App
var app = express();
var PORT = 3000;
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// create a reservation object inside of currentReservations[] to test in app
var currentReservations = [];

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function (req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reservations", function (req, res) {
  res.sendFile(path.join(__dirname, "reservations.html"));
});
// testing to make sure our currentReservations[] shows
app.get("/api/currentReservations", function (req, res) {
  console.log("currentReservations: ", currentReservations);
  res.json(currentReservations);
});

$(".submit").on("click", function (event) {
  event.preventDefault();
  console.log("clicked submit: ", this.event);
  

});

app.listen(PORT, function () {
  console.log("App listening on PORT: ", PORT);
});
