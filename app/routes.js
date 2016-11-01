// Import Controller modules
// var\ database = require("./controllers/database");

// Export all of the routes back to the application
module.exports = function (app) {
    // The prefix that every route will start with.
    var prefix = "/api";

    // Front-end routes =========================================================
    // route to handle all angular requests from browser
    app.get('/', function(req, res) {
        res.sendFile(__dirname + '/app/index.html');
    });

    // API Endpoints

};
