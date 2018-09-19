var request = require('request')

var fs = require('fs');

/*request('http://www.google.com/', function (error, res, body) {
    console.log('Body:', body);
})
*/

request('http://www.google.com/').pipe(fs.createWriteStream('output.html'));
