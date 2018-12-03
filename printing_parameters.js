function getAndPrintHTML (options) {

  /* Add your code here */
  var https = require('https');

  https.get(options, function(respone) {

    body = '';

    respone.setEncoding('utf-8');

    respone.on('data', function(data) {
      body += data;
    });
    respone.on('end', function() {
      console.log(body);
    });
  });

}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);