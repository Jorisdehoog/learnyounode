var fs = require('fs')
var nl = undefined

// read file first, callback function is where we check the number of newlines

function readFile(callback){
    fs.readFile(process.argv[2], 'utf8', function getNewlines(err, fileContents){
        var nl = fileContents.split('\n').length - 1;
        console.log(nl);
        // callback();
    });
}


readFile();

