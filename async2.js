var http = require('http');

// we get three urls
// we record the timestamp when a callback finishes
// a large while loop?


// var args = process.argv.slice(2);

var args = [ 'http://localhost:55812',
'http://localhost:55813',
'http://localhost:55814' ];


args.forEach(function(item){
    http.get(item, function(response){
        response.on("data", console.log)
        response.on("error", console.error)
    })
});




