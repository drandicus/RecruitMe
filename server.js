/**
 * Created by deverasd on 5/26/14.
 */
var express = require('express');
var path = require('path');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//Config settings
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/app');
app.use(bodyParser());
app.use(express.static(path.join(__dirname, '/app')));


//Gets the mongoose settings
mongoose.connect("mongodb://diego:abc123@oceanic.mongohq.com:10099/Recruit");



//Gets all of the routes, because it is AngularJS there are only a couple of routes needed
require('./lib/routes')(app);

//Gets all of the API calls manages them
require('./lib/controllers/api')(app);

app.listen(8080, function(){
    console.log("Magic is happening at Port: " + 8080);
});