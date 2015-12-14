'use strict';

var dotenv = require('dotenv');

dotenv.load();

module.exports = {
    webhook: process.env.SLACK_WEBHOOK,
    port: Number(process.env.PORT) || 5000,
    emoji: process.env.BOT_EMOJI || 'robot_face',
    username: process.env.BOT_USERNAME || 'Mr_SlackBot',
    channel: '#' + process.env.SLACK_CHANNEL || '#default',
    updateColor: process.env.UPDATE_COLOR || '#27ae60'
};
