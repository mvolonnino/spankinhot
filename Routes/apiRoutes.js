// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinList, etc
var tableData = require("../data/tableData");
var waitListData = require("../data/waitinglistData");

// ROUTING

module.exports = function (app) {
  // API GET Requests
  // Below code handles when users "visit" a page
  // In each of the below cases when a user visits a link -> (ex. localhost:PORT/api/admin... they are shown a JSON of the data in the table)

  app.get("/api/tables", function (req, res) {
    res.json(tableData);
  });

  app.get("/api/waitlist", function (req, res) {
    res.json(waitListData);
  });

  // API POST requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits for data (a JSON object)
  // ... the JSON is pushed to the appropriate JavaScript array
  // (ex. user fills out a reservation request.. this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  //

  app.post("/api/tables", function (req, res) {
    // Note the card here. Our "server" will respond to the requests and let users know if they have a table or not.
    // it will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware
    if (tableData.length < 5) {
      tableData.push(req.body);
      res.json(true);
    } else {
      waitListData.push(req.body);
      res.json(false);
    }
  });

  // Below code to clear out the data in the tableData and waitListData
  app.post("/api/clear", function (req, res) {
    // Empty out the arrays of data..
    tableData.length = 0;
    waitListData.length = 0;

    res.json({ ok: true });
  });
};
