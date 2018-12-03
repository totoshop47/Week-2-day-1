// var request = require('request');

// request('https://sytantris.github.io/http-examples/', function(err, response, body) {
//   if (err) throw err;
//   console.log('Response Status Code:', response.statusCode);
// });


var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples')               // Note 1
       .on('error', function (err) {                                   // Note 2
         throw err;
       })
       .on('response', function (response) {                           // Note 3
         console.log('Response Status Code: ', response.statusCode);
       })
       .pipe(fs.createWriteStream('./downloaded.html'));               // Note 4
