var http = require('http');

// we get three urls
// we record the timestamp when a callback finishes
// a large while loop?

// BTW be advised that this code does not always verify as correct!



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




// OFFICIAL SOLUTION LOL //

// var http = require('http')
// var bl = require('bl')
// var results = []
// var count = 0

// function printResults () {
//   for (var i = 0; i < 3; i++) {
//     console.log(results[i])
//   }
// }

// function httpGet (index) {
//   http.get(process.argv[2 + index], function (response) {
//     response.pipe(bl(function (err, data) {
//       if (err) {
//         return console.error(err)
//       }

//       results[index] = data.toString()
//       count++

//       if (count === 3) {
//         printResults()
//       }
//     }))
//   })
// }

// for (var i = 0; i < 3; i++) {
//   httpGet(i)
// }