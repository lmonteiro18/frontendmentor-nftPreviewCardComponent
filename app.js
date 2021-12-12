//--------------------------------------MODULES AND APP SETUP--------------------------------------
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

//--------------------------------------MAIN ROUTE--------------------------------------
app.route("/")
    .get(function (req, res) {
        res.sendFile(__dirname + "/index.html");
    });


//--------------------------------------PORT AND APP LISTEN--------------------------------------
let port = process.env.PORT;
if (port === undefined || port === null || port === "") {
    port = 3000;
}

app.listen(port, function () {
    console.log("Server is up and running on port " + port + ".");
});