var http = require('http')
var link = process.argv[2]

http.get(link, function(response) {
  response.on('data', function(data) {
    console.log(data.toString())
  })
})