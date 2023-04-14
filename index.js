const AUTH = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhdXRoLWJhY2tlbmQ6YXBwIiwic3ViIjoiZDQ3YzZjOWItYjU2Yi00OGVkLTk2YjItNjFmYjY2NmY1YmVjIn0.YEB1dpW1hCooHecttmHs33WtY7fGtme8ysaoJWupNPk'
let number = 8219617146;

// Generate OTP 
var axios = require('axios');.
var data = JSON.stringify({
  "originator": "SignOTP",
  "recipient": `+91${number}`,
  "content": "Greetings from AMBER, your mobile verification code is: {}",
  "expiry": "600",
  "data_coding": "text"
});

var config = {
  method: 'post',
  url: 'https://api.d7networks.com/verify/v1/otp/send-otp',
  headers: { 
    'Authorization': `Bearer ${AUTH}`, 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});


//  Resend OTP 
var axios = require('axios');
var data = JSON.stringify({
  "otp_id": "8d963dbf-d655-4fe6-9157-48885a036050"
});

var config = {
  method: 'post',
  url: 'https://api.d7networks.com/verify/v1/otp/resend-otp',
  headers: { 
    'Authorization': `Bearer ${AUTH}`, 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});


// Verify OTP 
let recievedOTP = 435986;

var axios = require('axios');
var data = JSON.stringify({
  "otp_id": "8d963dbf-d655-4fe6-9157-48885a036050",
  "otp_code": recievedOTP
});

var config = {
  method: 'post',
  url: 'https://api.d7networks.com/verify/v1/otp/verify-otp',
  headers: { 
    'Authorization': `Bearer ${AUTH}`, 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});