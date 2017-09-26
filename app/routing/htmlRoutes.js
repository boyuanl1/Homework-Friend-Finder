var path = require("path");
// ===============================================================================
// ROUTING
// ===============================================================================
module.exports = function(app) {
    // HTML GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases the user is shown an HTML page of content
    // ---------------------------------------------------------------------------
    app.get("/survey", function(req, res) {
            res.sendFile(path.join(__dirname, "../public/survey.html"));
            });

    app.get("*", function(req, res) {
            res.sendFile(path.join(__dirname, "../public/home.html"));
            });
};
