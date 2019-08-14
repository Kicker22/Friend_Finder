
// Dependencies
var express = require("express");
var path = require("path");
const moment = require("moment")

var app = express();

var PORT = process.env.PORT || 8080

const logger = (req,res,next) => {
    console.log(`${req.protocol}://${req.get('host')}${
        req.originalUrl
    }: ${moment().format()}`
    );
    next();
}

// middleware
app.use(logger)
// body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}))

// init static pages
app.use(express.static(__dirname + './app/public'));
app.use(express.static(__dirname + './app/data'));



require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);




app.listen(PORT,function(){
    console.log("App is listening on PORT: http://localhost:" + PORT)
});






