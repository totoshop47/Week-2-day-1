var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')               // Note 1
       .on('error', function (err) {                                   // Note 2
         throw err;
       })
       .on('response', function (response) {
         console.log(response.statusCode, response.headers['content-type']);     // Note 3
       })
       .pipe(fs.createWriteStream('./future.jpg'));
                 // Note 4