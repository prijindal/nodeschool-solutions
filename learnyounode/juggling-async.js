var http = require('http')
var links = process.argv.slice(2)
var content = ['', '', '']
var done = [false, false, false]

http.get(links[0], function(response) {
  var body = ''
  response.on('data', function(data) {
    body+=data.toString()
  })
  response.on('end', function(data) {
    console.log(body)
    http.get(links[1], function(response) {
      var body = ''
      response.on('data', function(data) {
        body+=data.toString()
      })
      response.on('end', function(data) {
        console.log(body)
        http.get(links[2], function(response) {
          var body = ''
          response.on('data', function(data) {
            body+=data.toString()
          })
          response.on('end', function(data) {
            console.log(body)
          })
        })
      })
    })
  })
})

