//jshint esversion:6

const express = require("express")
const bodyParser = require("body-parser")

const app = express();
app.length("/", function(req, res){
    res.send("Hello");
});

app.listen(3000, function(){
    console.log("Server is running.")
});