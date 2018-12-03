var https = require('https');

module.exports = function getHTML (options, callback) {
    /* Your code here */

  https.get(options, function(respone) {

    body = '';

    respone.setEncoding('utf-8');

    respone.on('data', function(data) {
      body += data;
    });
    respone.on('end', function() {
      callback(body);
    });
  });
};