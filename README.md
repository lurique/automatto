<p align="center">
  <img src="https://media.giphy.com/media/fDers1vZjjKFy/giphy-downsized.gif" alt="Giphy.com - Author: Dots" width="250"/>
</p>

<h1 align="center">Automatto.js</h1>

<p align="center">
  <img src="https://img.shields.io/badge/release-alpha-orange.svg" alt="Release: alpha">
  <a href="https://snyk.io/test/github/lurique/automatto?targetFile=package.json"><img src="https://snyk.io/test/github/lurique/automatto/badge.svg?targetFile=package.json" alt="Known Vulnerabilities" data-canonical-src="https://snyk.io/test/github/lurique/automatto?targetFile=package.json" style="max-width:100%;"></a>
</p>

<p align="center">
  Automatto.js will help you integrate your <i>DialogFlow</i> conversational three into a cool web chatbot.
</p>

<br>

## Features

* It's based on *Dialogflow* V1 API - avoiding authentication methods;
* Handles all *Google Assistant* response types (Like cards, media, simple response, carousel...);
* And if you don't want to build front-end structure to your bot, I will only ask for your *DialogFlow* Client Token.

## Demo
Just importing the JS file: https://lurique.github.io/automatto/demos/base <br>
With custom layout: https://lurique.github.io/automatto/demos/custom

## Getting started

### Library usage
**Via Package Manager**:
```shell
npm i --save automatto
```

**Via CDN**:
```shell
# CSS
https://cdn.jsdelivr.net/npm/automatto@0.2.1/src/css/automatto.min.css

# JS
https://cdn.jsdelivr.net/npm/automatto@0.2.1/src/js/automatto.min.js
```

**Code example:**
After importing automatto library, you can follow the example below:
```javascript
var automatto = new Automatto('chatbot', {
  dialogflowVersion: '20170712',
  dialogflowLanguage: 'pt-br',
  dialogflowClientToken: '123456...',
  dialogflowTimezone: 'America/Sao_Paulo'
  ...
});
```

### DialogFlow usage
This library parses all responses that comes from DialogFlow **WITH** Google Assistant response type. Below is a simple tutorial how to build your first intent with *Google Assistant* response type.

<ol>
  <li>Go to https://console.dialogflow.com/ and connect to your account;</li>
  <li>Create your base project (this will give you the client token, timezone, language and other properties needed);</li>
  <li>Go to intent tabs and create your first intent;</li>
  <li>Inside your intent, scroll all the way down the page and find a section called <strong><i>Responses</i></strong>;</li>
  <li>In the responses tab, select <strong><i>Google Assistant</i></strong> response types;</li>
  <li>Now you can start building the response of your intent.</li>
</ol>

If you don't know how to create a conversational flow inside DialogFlow, it's necessary that you follow this guide: https://dialogflow.com/docs/getting-started/first-agent - and here is a nice tutorial how to build a restaurant message flow: https://chatbotslife.com/dialogflow-restaurant-bot-tutorial-1-45ce1d3c0ab5

## Options
Every option that has "dialogflow" as suffix, needs to be the same value presented on your dialogflow dashboard, like: `version`, `language`, `client token`, `timezone`. In some options, the default property is set to "AUTO", this means that this specific option is being auto populated by the lib and don't need any changes.

### DialogFlow
| Option | Type | Default | Description |
|--------|------|---------|-------------|
| dialogflowVersion | string | 20170712 | Set the default version number |
| dialogflowLanguage | string | en-us | Set the default language based on what is configured in dialogflow |
| dialogflowSessionId | string | **auto** | Auto generates a uuid for every user (stored in localStorage) |
| dialogflowClientToken | string | **null** | Define what project you'll be using based on *DialogFlow* client token |
| dialogflowTimezone | string | America/New_York | Define your dialogflow project timezone |
| dialogflowDefaultWelcomeRequest | string | "Hi" | Define the entry response to chatbot after opening it |

### Library
| Option | Type | Default | Description |
|--------|------|---------|-------------|
| chatbotFormId | string | chatbot | Define your form id. Automatto will prepare the submit event |
| chatbotResponseBubbleId | string | chatbot-response | Define the HTML (layout) for the bot response |
| chatbotResponseBubbleTextId | string | chatbot-response-text | Define where the text will be stored in chatbot response bubble |
| chatbotRequestBubbleId | string | chatbot-request | Define the HTML (layout) for the user request |
| chatbotRequestBubbleTextId | string | chatbot-request-text | Define where the text will be stored in chatbot request bubble |
| logErrors | boolean | false | Define if error logs should appear in console |

---

### Browser support
Automatto works partially on IE9 and fully in IE10+ (in addition to other browsers such as Firefox, Chrome (+ V8 Engine) and Safari.

### License
Copyright (c) 2018 - Lucas Henrique <br>
Licensed under the MIT license

---
### Author
| [<img src="https://avatars0.githubusercontent.com/u/18560758?v=4&u=a081aceab30289c595d3a0a6acf96e13d12fbc8a&s=115"><br><sub>@lurique</sub>](https://github.com/lurique) |
| :---: |