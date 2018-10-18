var http = require('http');

// we get three urls
// we record the timestamp when a callback finishes
// a large while loop?


var args = process.argv.slice(2);

// var args = [ 'http://localhost:55812',
// 'http://localhost:55813',
// 'http://localhost:55814' ];

console.log(args);

args.forEach(function(val){
    http.get(val, function(response){
            response.setEncoding('utf8');
            body = '';
            response.on("data", function(chunk){
                body += chunk;
            });
            response.on("end", function(){
                // record the timestamp
                var timeStamp1 = Math.floor(Date.now());
                console.log("Timestamp: " + (val.substr(val.length - 1)) + "  +  " +  (timeStamp1));
                // console.log(body);
            });
            response.on("error", console.error);
        });
})

