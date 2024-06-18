// Create web server
// Create a web server that listens to the port 3000 and returns the comments.json file.
// The comments.json file is stored in the same folder.

var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });
  var rs = fs.createReadStream('comments.json');
  rs.pipe(res);
}).listen(3000);