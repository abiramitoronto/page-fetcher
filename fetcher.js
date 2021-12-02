const request = require('request');
const fs = require('fs');
const url_inp = process.argv[2];
const path_inp = process.argv[3];
const fetcher = function(url,path) {

request(`${url}`, (error, response, body) => {
  //console.log('error:', error); // Print the error if one occurred
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the Google homepage.
  bytes = body.length;
  fs.writeFile(`${path}`,body, () => {
    console.log(`Downloaded and saved ${bytes} bytes to ${path}`);
  })
});
};

fetcher(url_inp,path_inp);
