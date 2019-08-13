var path = require("path")
const express = require("express")
var classData = require("../data/friends")

console.log(classData)

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {

        res.json(classData);
    });


    // If no matching route is found default to home
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    app.post("/api/friends", function (req, res) {
        for (let i = 0; i < res.length; i++) {
            return res[i]
        }
    })
}