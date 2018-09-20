/*
   _____ _____ _____ _____ _____ _____ _____ _____ _____      __ _____ 
  |  _  |  |  |_   _|     |     |  _  |_   _|_   _|     |  __|  |   __|
  |     |  |  | | | |  |  | | | |     | | |   | | |  |  |_|  |  |__   |
  |__|__|_____| |_| |_____|_|_|_|__|__| |_|   |_| |_____|_|_____|_____|
  
    Version : 0.1.0
     Author : Lucas Henrique
 Author URL : https://lhenrique.com.br/
    Website : https://automatto.github.io/
       Docs : https://automatto.github.io/docs
       Repo : https://github.com/lurique/automatto
     Issues : https://github.com/lurique/automatto/issues
*/

function Chattob(elem, props) {

  var _ = this;

  _.defaults = {
    chatbotFormId: null,
    chatbotBotResponseBubbleParentId: null,
    chatbotUserRequestBubbleParentId: null,
    chatbotBotResponseTextId: null,
    chatbotUserRequestTextId: null,
    dialogflowVersion: "",
    dialogflowLanguage: "",
    dialogflowSessionId: "",
    dialogflowDefaultWelcomeRequest: "",
    dialogflowClientToken: "",
    dialogflowTimezone: "",
    logErrors: false
  }

  _.setProperties = function() {
    _.defaults.chatbotFormId = elem;
    _.defaults.dialogflowSessionId = _.getUuid().toUpperCase();
    
    Object.keys(props).forEach(function(key) {
      if ( props[key] ) {
        _.defaults[key] = props[key];
      }
    });

    if ( _.validateProperties().status === false ) {
      return _.logErrors(_.validateProperties().message);
    }

    return _.defaults;
  }
  
  _.validateProperties = function() {
    if ( _.defaults.dialogflowVersion === "" ) return {status: false, message: "Dialogflow version number is necessary."};
    if ( _.defaults.dialogflowLanguage === "" ) return {status: false, message: "Dialogflow language is necessary."};
    if ( _.defaults.dialogflowClientToken === "" ) return {status: false, message: "Diagloflow client token is necessary."};
    if ( _.defaults.dialogflowTimezone === "" ) return {status: false, message: "Dialogflow timezone is necessary."};

    return { status: true, message: "Configuration is ok." };
  }

  _.doRequest = function(e, query) {
    e.preventDefault();

    if ( query === "" ) return;

    var xhr = new XMLHttpRequest();
    var string = query.replace(/[^a-zA-Zà-úÀ-Ú ]/g, "");
    var endpoint = `https://api.dialogflow.com/v1/query?v=${_.defaults.dialogflowVersion}&query=${string}&lang=pt-br&sessionId=${_.defaults.dialogflowClientToken}&timezone=${_.defaults.dialogflowTimezone}`;

    xhr.addEventListener('readystatechange', function() {
      if ( this.readyState === 4 ) {
        var data = JSON.parse(this.responseText);
        _.parseDialogflowResponse(data);
      }
    });

    xhr.open("GET", endpoint);
    xhr.setRequestHeader("Authorization", `Bearer ${_.defaults.dialogflowClientToken}`);
    xhr.send();
  }

  _.parseDialogflowResponse = function(data) {
    var messages = data.result.fulfillment.messages;

    var responseTypes = {
      "simple_response": _.parsers.simpleResponse(),
      "basic_card": _.parsers.basicCard(),
      "list": _.parsers.list(),
      "suggestion_chips": _.parsers.suggestionChips(),
      "carousel_card": _.parsers.carouselCard(),
      "browse_carousel_card": _.parsers.browseCarouselCard(),
      "link_out_suggestion": _.parsers.linkOutSuggestion(),
      "media_content": _.parsers.mediaContent(),
      "custom_payload": _.parsers.customPayload(),
      "table_card": _.parsers.tableCard()
    }

    messages.forEach(function(message) {
      responseTypes[message.type](message);
    });
  }

  _.parsers = {
    simpleResponse: function(message) {
      console.log(message);
    },

    basicCard: function(message) {
      console.log(message);
    },

    list: function(message) {
      console.log(message);
    },

    suggestionChips: function(message) {
      console.log(message);
    },

    carouselCard: function(message) {
      console.log(message);
    },

    browseCarouselCard: function(message) {
      console.log(message);
    },

    linkOutSuggestion: function(message) {
      console.log(message);
    },

    mediaContent: function(message) {
      console.log(message);
    },

    customPayload: function(message) {
      console.log(message);
    },

    tableCard: function(message) {
      console.log(message);
    }
  }

  _.getUuid = function() {
    function id() {
      return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }

    return id() + id() + "-" + id() + "-" + id() + "-" + id() + "-" + id() + id() + id();
  }

  _.logErrors = function(err) {
    if ( _.defaults.logErrors !== true ) return;
    console.log(err);
  }

  if ( props ) return _.setProperties();
}