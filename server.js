'use strict';

// Default Set-up
var express = require('express');
var app = express();
var port = process.env.PORT || 5000;

// Libs
var bodyParser = require('body-parser');
var util = require('./libs/util');
var slackService = require('./libs/slackService');

var debugRoute = require('./routes/debug');

// Commonly used Middleware to parse JSON request
var jsonParser = bodyParser.json({type: 'application/*'});

app.post('/', jsonParser, function (req, res) {
    // if request doesn't contain body, respond with 400 error.
    if (!req.body) {
        return res.sendStatus(400);
    } else {
        // Place logic to for message to be sent to Slack service
        slackService.sendMessage(message);
    }

    res.sendStatus(200);
});

app.use('/debug', debugRoute);

app.listen(port, function () {
    console.log('Slack Contentful is listening on PORT:', port);
});
