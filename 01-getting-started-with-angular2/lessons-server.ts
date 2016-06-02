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
    .post((req, res) => {
        lessons.push(req.body);
        res.status(200).send();
    });

app.route('/lessons/:lessonId')
    .delete((req,res) => {
        const lessonId = req.params.lessonId;
        console.log("deleting lesson ", lessonId);
        const index = _.find(lessons,
            lesson => lesson.id === lessonId
        );
        lessons.splice(index, 1);
        res.status(200).send();
    });

var server = app.listen(8080, function() {
    console.log("Server running at http://localhost:" + server.address().port);
});

