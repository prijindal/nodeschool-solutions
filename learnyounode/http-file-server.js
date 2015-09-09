var http = require('http'),
    fs = require('fs');

var server = http.createServer(function(req, res) {
  var data = fs.readFileSync(process.argv[3]);
  res.end(data.toString())
});

server.listen(process.argv[2])