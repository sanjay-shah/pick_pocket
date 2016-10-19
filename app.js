var request = require('request');
var moment = require('moment');
var config = require('./config');
var twilio = require('twilio')(
  config.twilio.account_sid, 
  config.twilio.auth_token
  );

var wallet = config.mining.dwarfpool.address;
var email = config.mining.dwarfpool.email;

var phone_from = config.twilio.from;
var phone_to = config.twilio.to;


function sendAlert(str) {
  console.log('Sending text alert to ' + phone_to +': ' + str);
  //Send an SMS text message
  twilio.sendMessage({

      to: phone_to, // Any number Twilio can deliver to
      from: phone_from, // A number you bought from Twilio and can use for outbound communication
      body: str // body of the SMS message

  }, function(err, responseData) { //this function is executed when a response is received from Twilio

      if (!err) { 

          console.log(responseData.from); // outputs "+14506667788"
          console.log(responseData.body); // outputs "word to your mother."
      }
  });

}

request('http://dwarfpool.com/eth/api?wallet=' + wallet + '&email=' + email, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    
    console.log(body) // Show the HTML for the Google homepage. 
    
    var apiResponse = JSON.parse(body);
    
    if((apiResponse.error === false) && (apiResponse.workers.rig1.alive === false) && (apiResponse.workers.rig1.second_since_submit > 840)){
      var lastSubmitSec = moment().unix() - apiResponse.workers.rig1.second_since_submit;
      var sinceNow = moment.unix(lastSubmitSec).fromNow(true);
      sendAlert('Warning! rig1 has not been hashing since ' + sinceNow);
    } else if(apiResponse.error === true){
      sendAlert('Wake Up! Something is wrong with rig1. error_code: ' + apiResponse.error_code);
    } else {
      //
      var sinceNow = moment.unix(moment().unix() - apiResponse.workers.rig1.second_since_submit).fromNow();
      
      if (apiResponse.workers.rig1.second_since_submit > 840) {
        sendAlert('Warning: Last submit was ' + sinceNow + '. Things may not be ok. Check proxy\'s reject_rate');
      } else {
        console.log('Last submit was ' + sinceNow + '. Everything ok..');
      }
    }
  }
});
