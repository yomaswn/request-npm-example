var request = require('request');
var fs = require('fs')
request('http://www.google.com', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
});
// request('http://google.com/doodle.png').pipe(fs.createWriteStream('doodle.png'))

//mengambil gambar dari url dan menyimpannya pda local storage kita
var url = 'https://www.google.co.id/logos/doodles/2017/mudik-2017-5975009070678016-l.png';
request
  .get(url)
  .on('response', function(response) {
    console.log(response.statusCode) // 200
    console.log(response.headers['content-type']) // 'image/png'
  })
  .pipe(fs.createWriteStream('mudik.png'))
