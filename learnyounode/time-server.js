var net = require('net')

var server = net.createServer(function(socket) {
  var date = new Date()
  var str = ''
  str += date.getFullYear().toString() + '-0'
  str += (date.getMonth() + 1).toString() + '-0'
  str += date.getDate().toString() + ' '
  str += date.getHours().toString() +':' 
  str += date.getMinutes()
  socket.end(str)
});

server.listen(process.argv[2])