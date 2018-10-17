var fs = require('fs')
const path = require('path')

module.exports = function filterPath (pathBase, extention, callback){
    // pathBase = process.argv[2];
    
    // make a list of filtered items
    var ls = [];
    
    fs.readdir(pathBase, function printPath(err, list){
        if (err){ return callback(err)};
        list.forEach(function(element){
            if(path.extname(element) == '.' + extention){
                ls.push(element);
                // callback(null, element);
            }
        })
        callback(null, ls);
    });
}

// module.exports = filterPath;