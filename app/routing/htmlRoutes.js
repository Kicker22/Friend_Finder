var path = require("path")
const express = require("express")

module.exports = function (app) {
    app.get("/home", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"))   
        // res.sendFile(path.join(__dirname, "../public/home.css")); 
        // require("../public/home.css")s
    });

    app.use(express.static("public"));

    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html")); 
        
        
    });

    // If no matching route is found default to home
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

}