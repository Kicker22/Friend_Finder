const path = require("path")
const express = require("express")

module.exports = function (app) {
    app.get("/home", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));   
    });

    app.use(express.static("./app/public"));

    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html")); 
    });
        
        

    // If no matching route is found default to home
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

}