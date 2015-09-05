var numbers = process.argv
var total = 0
for(var i = 2;i<numbers.length;++i) {
    total+=Number(numbers[i])
}

console.log(total)
