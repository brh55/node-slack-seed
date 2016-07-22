
Starter README below
---
# App-Name
![Repo Version](https://img.shields.io/github/tag/GitHub-User-Name/repo-name.svg?style=flat-square&label=version)
[![Build Status](https://travis-ci.org/GitHub-User-Name/repo-name?branch=master)](https://travis-ci.org/brh55/node-slack-seed) [![Dependency Status](https://david-dm.org/GitHub-User-Name/repo-name.svg)](https://david-dm.org/GitHub-User-Name/repo-name)
 [![Coverage Status](https://coveralls.io/repos/GitHub-User-Name/repo-name.svg?branch=master&service=github)](https://coveralls.io/github/GitHub-User-Name/repo-name?branch=master)

## Requirements

  * [Slack](http://slack.com/) Privileages to integrate Incoming Webhooks
  * [Node.js](http://nodejs.org/)

## Automated Set Up with Heroku

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Manual Set Up

### Configuration
The configuration of the bot are set with environment variables using an `.env` file. Please look at the `example.env` file of possible configurations, and create an updated `.env` file before you deploy.

Current possible configurations:

__example.env__
```
#REQUIRED VALUE, HOOK is available on Slack Integration Page
SLACK_WEBHOOK = https://hooks.slack.com/services/.../.../...
SLACK_CHANNEL = ChannelHere

#The following values are optional, but the app will take the defaults as specified below
PORT = 5000
BOT_USERNAME = DesiredBotName

#Emoji is used for an Bot's user icon, you can upload one on your team's channel and declare it here
BOT_EMOJI = pencil

#HEX Color of update notification
UPDATE_COLOR = "#27ae60"
```

## Deploying Steps

1. Set up the address of your server to configure where your outgoing hooks should be sent to. (ex: myapp.heroku.com)
2. Clone or download/unzip this repo to your serer
3. Adjust your `.env` file as outlined above
4. Install [Node.js](http://nodejs.org/) on your server if not done so already
5. Install repo dependencies
  
  ```bash
  $ cd to/repo
  $ npm install
  ```
6. Start the server

  ```bash
  $ npm start
  ```

## Post Deployment - Test

After your app has deployed, go to your server url and go to the `/check` endpoint.

Example:
```
http://myherokuapp.heroku.com/debug
```

If you've successfully deployed, you should get a successful message stating *Successful Set-up* along with a table of configurations to verify against.

If set up was unsuccessful, you should get a message to verify your configurations, along with important configurations that the server has set up.

## License
This repository is protected under the MIT License.

## Contribute
Contributions are welcomed, feel free to submit and report any issues.

