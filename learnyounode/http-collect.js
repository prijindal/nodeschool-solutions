var http = require('http')
var bl = require('bl')
var link = process.argv[2]

http.get(link, function(response) {
  response.pipe(bl(function(err, data) {
    console.log(data.toString().length)
    console.log(data.toString())
  }))
})