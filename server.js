// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var tables = [
    {
        name: "Kavitha V",
        phone: "301-145-7832",
        email: "KavyV@gmail.com",
        uniqueId: 'Kavitha V'
      },
      {
        name: "John Doe",
        phone: "441-290-1172",
        email: "JohnDoe21@gmail.com",
        uniqueId: 'John Doe'
      },
      {
        name: "Jane Carson",
        phone: "908-108-1452",
        email: "JaneCarson0@gmail.com",
        uniqueId: 'Jane Carson'
      }
];
var waitlist = [
    {
        name: "David John",
        phone: "344-238-9221",
        email: "DavidJohn@gmail.com",
        uniqueId: 'David John'
      }
];


app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/api/tables", function (req, res) {
    res.json(tables);
});

app.get("/api/waitlist", function (req, res) {
    res.json(waitlist);
});
app.get("/admin", function (req, res) {
    res.sendFile(path.join(__dirname, "admin.html"));
});

app.post("/api/clearTables", function (req, res) {
    tables.length = 0;
    waitlist.length = 0;
});

app.post("/api/tables", function (req, res) {

    var newReservation = req.body;

    if (tables.length < 5) {
        tables.push(newReservation);
        res.json("Adding new reservation");
    }
    else{
        res.json("Sorry, You are in the waiting list!");
        waitlist.push(newReservation);
    }

});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});