// DEPENDENCIES
// We need to include path package to get the correct file path for out html
var path = require("path");

// ROUTING -> create the routes to each html page

module.exports = function (app) {
  // HTML Get Requests
  // Below code handles when users "visit" a page
  // In each of the below cases the user is shown an HTML page of content

  app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/tables.html"));
  });

  app.get("/reservations", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/reservations.html"));
  });

  // If no matching route is found -> default to index.html
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};
