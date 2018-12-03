function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  /* Add your code here */
  var https = require('https');

  https.get(requestOptions, function(respone) {

    var body = '';

    respone.setEncoding('utf-8');

    respone.on('data', function(data) {
      body += data;
    });
    respone.on('end', function() {
      console.log(body);
    });

  });

}

getAndPrintHTML();