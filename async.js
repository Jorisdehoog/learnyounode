var http = require('http');

// we get three urls
// we record the timestamp when a callback finishes
// a large while loop?



var args = process.argv.slice(2);

var getResponse = function(url){
    return new Promise(function(resolve, reject){
        http.get(url, function(res){
            res.setEncoding('utf8');
            body = '';
            res.on('data', function(chunk){
                body += chunk;
            });
            res.on('end', function(){
                resolve(body);
            });
            res.on('error', function(){
                reject('err');
            })
        });
    });
}

// var promise1 = getResponse(args[1]).then(function(bodies){
//     // console.log('------- This is in the callback ---------');
//     // console.log(bodies);
//     return bodies;
// })

promises = [];
args.forEach(item => {
    promises.push(getResponse(item).then(function(bodies){
        return bodies;
    }));
});

Promise.all(promises).then(function(values){
    values.forEach(item => {
        console.log(item);
    })
})




// args.forEach(function(val){
//     http.get(val, function(response){
//             response.setEncoding('utf8');
//             body = '';
//             response.on("data", function(chunk){
//                 body += chunk;
//             });
//             response.on("end", function(){
//                 // record the timestamp
//                 var timeStamp1 = Math.floor(Date.now());
//                 console.log("Timestamp: " + (val.substr(val.length - 1)) + "  +  " +  (timeStamp1));
//                 // console.log(body);
//             });
//             response.on("error", console.error);
//         });
// })

