var tableData = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================
module.exports = function(app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------
    app.get("/api/friends", function(req, res) {
            res.json(tableData);
            });

    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.
    // In each of the below cases, when a user submits form data (a JSON object)
    // ...the JSON is pushed to the appropriate JavaScript array
    // (ex. User fills out a reservation request... this data is then sent to the server...
    // Then the server saves the data to the tableData array)
    // ---------------------------------------------------------------------------
    app.post("/api/friends", function(req, res) {
             // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
             // It will do this by sending out the value "true" have a table
             var bestMatch = 100;
             var num = 0;
 
             for (var i = 0; i < tableData.length; i++) {
                 var match = 0;
                 for (var j = 0; j < tableData[i].scores.length; j++) {
                     match += Math.abs(parseFloat(tableData[i].scores[j]) - parseFloat(req.body.scores[j]))
                 }
                 if (match < bestMatch) {
                     bestMatch = match;
                     num = i;
                 }
             }
             tableData.push(req.body);
             
             res.json(tableData[num]);
             });
    // ---------------------------------------------------------------------------
    // I added this below code so you could clear out the table while working with the functionality.
    // Don"t worry about it!
    app.post("/api/clear", function() {
             // Empty out the arrays of data
             tableData = [];
             waitListData = [];
             console.log(tableData);
             });
};
