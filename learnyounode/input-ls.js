var fs = require('fs');

fs.readdir(process.argv[2], function(err, data) {
    var ls = data.filter(function(filename) {
        return filename.split('.')[1] == process.argv[3]
    })
    for (var i = 0; i < ls.length; i++) {
        console.log(ls[i])
    }
})
