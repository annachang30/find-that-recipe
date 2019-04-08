var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var unirest = require('unirest');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static( __dirname + '/public/dist/public' ));

mongoose.connect('mongodb://localhost/recipe', { useNewUrlParser: true });

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(8000, () => console.log("listening on port 8000"));
