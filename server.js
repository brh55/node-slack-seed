'use strict';

// Default Set-up
var express = require('express');
var app = express();
var port = process.env.PORT || 5000;

// Libs
var bodyParser = require('body-parser');
var util = require('./libs/util');
var config = require('./libs/config');
var slackService = require('./libs/slackService');

// Commonly used Middlewear to parse JSON request
var jsonParser = bodyParser.json({type: 'application/*'});

app.post('/', jsonParser, function (req, res) {
    // if request doesn't contain body, respond with 400 error.
    if (!req.body) {
        return res.sendStatus(400);
    } else {
        // Place logic to for message to be sent to Slack service
        slackService.sendMessage(message);
    }
});

// This is a endpoint that can be used to check if configs are properly set, and can be built further upon
// for your needs.
app.get('/check', function (req, res) {
    if (util.allDefined(config)) {
        // If all configs are properly set, display Success confirmation
        var entries = filter.getEntryString();
        var htmlString = '<h1>Successful Set-up</h1><h3>Please verify settings below</h3>';
        htmlString += '<table><tr><td>Channel</td><td>Bot Username</td></tr><tr><td>' + config.channel + '</td><td>' + config.username + '</td></tr></table>';
        res.send(htmlString);
    } else {
        // Error message if an undefined config is discovered
        var undefConfigs = util.getUndefinedKeys(config, ', ');
        res.send('<h1>Please verify the following configs:</h1>' + undefConfigs);
    }
});

app.listen(port, function () {
    console.log('Slack Contentful is listening on PORT:', port);
});
