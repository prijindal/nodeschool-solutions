var fs=require('fs')

var fileBuffer = fs.readFileSync(process.argv[2])
var fileNewLines = fileBuffer.toString().split('\n').length - 1
console.log(fileNewLines)
