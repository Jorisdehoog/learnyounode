var mymod = require('./filterModule.js');


pathBase = 'H:\\DropBoxLocal\\Dropbox\\HTML_projects\\node Projects\\learnyounode';
ext = 'js';

// var myModuleInstance = new mymod();

// var test = mymod(process.argv[2], process.argv[3], function (err, elements){
var test = mymod(pathBase, ext, function (err, elements){
    if (err) {
        return console.error(err);
    }
    // console.log(elements);
    for (let o of elements){
        console.log(o)
    }

});

