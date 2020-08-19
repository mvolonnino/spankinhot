// DEPENDECIES -> Series of npm packages that we will use to give our server useful functionality
var express = require("express");
// Sets up the Express App
var app = express();
// Sets up an intial port. Will use in the listener
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTER -> Below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs
require("./Routes/htmlRoutes")(app);
require("./Routes/apiRoutes")(app);

// LISTENER -> Below code effectively "starts" our server
app.listen(PORT, function () {
  console.log("App listening on PORT: ", PORT);
});
