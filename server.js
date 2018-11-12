
var express = require("express");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
var routes = require("./controllers/burgers_controller.js")(app);

app.use(routes);
// Starting our Express app
// =============================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});


