//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.get("/", function (req, res) {

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    var today = new Date();
    var currentDay = today.getDay();
    var day = "";

    if (currentDay === 6 || currentDay === 0) {
        day = "Weekend: " + days[currentDay]
    } else {
        day = "Weekday: " + days[currentDay]
    }

    res.render("list", {kindOfDay: day})
    
});

app.listen(3000, function () {
    console.log("Server is running.")
});