declare const require;


var express = require('express');
var bodyParser = require('body-parser');
var _ = require('lodash');
import {lessonsData} from "./src/services-intro/lessons";



var app = express();

app.use(express.static('.'));
app.use(bodyParser.json());
app.use(bodyParser.text());


const lessons = lessonsData;


app.route('/lessons')
    .get((req, res) => {
        res.status(200).json(lessons);
    })
    .put((req, res) => {
        var json = req.body;

    })
    .delete((req,res) => {
        console.log('removing todo with id = ' + req.query.id);

    })
    .post((req, res) => {
        //todos.push(req.body);

    });

var server = app.listen(8080, function() {
    console.log("Server running at http://localhost:" + server.address().port);
});

