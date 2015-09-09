var fs = require('fs');



module.exports = function(dirname, extension, callback) {
  fs.readdir(dirname, function(err, data) {
    if (err) {
      callback(err)
    }
    else {
      var ls = data.filter(function(filename) {
        return filename.split('.')[1] == extension
      })
      callback(err, ls)
    }
  })
}