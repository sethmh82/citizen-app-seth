var express = require('express');
var path = require("path");
var request = require("request");
var bodyParser = require('body-parser');
var methodOverride = require("method-override");
var session  = require('express-session');
var PORT = process.env.PORT || 3000;
var app = express();

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/*+json" }));

// Static directory
app.use(express.static("./public"));


app.use(methodOverride("_method"));

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes =============================================================
//require("./routes/html-routes.js")(app);
//require("./routes/api-routes.js")(app);

//MVC Format
var eventXRoutes = require("./controllers/events_controllers.js");
app.use(eventXRoutes);


// Syncing our sequelize models and then starting our express app
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});