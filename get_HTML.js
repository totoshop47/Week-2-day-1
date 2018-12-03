function getHTML (options, callback) {

  /* Add your code here */
  var https = require('https');

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

}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML)