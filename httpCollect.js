var http = require('http')

// console.log("wtf is going on")

http.get(process.argv[2], function(response){
    response.setEncoding('utf8');
    body = '';
    response.on("data", function(chunk){
        body += chunk;
    });
    response.on("end", function(){
        console.log(body.length);
        console.log(body);
    })
    response.on("error", console.error);
});


// OFFICIAL SOLUTION

// var http = require('http')
// var bl = require('bl')

// http.get(process.argv[2], function (response) {
//   response.pipe(bl(function (err, data) {
//     if (err) {
//       return console.error(err)
//     }
//     data = data.toString()
//     console.log(data.length)
//     console.log(data)
//   }))
// })