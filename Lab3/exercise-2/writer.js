// require fs
const fs = require('fs');

// create writable stream to writer.txt
const file = fs.createWriteStream('./writer.txt');

// function to write data
var writeData = function() {
    for(let i=0; i<=10; i++){
        file.write('this is some write line text\n')
    }
    file.end();
}

module.exports = {
    writeData: writeData
}