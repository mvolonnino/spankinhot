// DEPENDENCIES
var path = require("path");


function apiRoutes(){
  app.get("/api/tables", function (req, res) {
    return res.json(currentReservations);
  });
}