var http = require('http')
var map = require('through2-map')
var fs = require('fs')

var server = http.createServer(function(req, res){
    req.setEncoding('utf8')

    req.on('data', (inp) => {
        inp.pipe(map(function(chunk){
            console.log(chunk)
        }))
    })

    // req.pipe(map(function(chunk){
    //     console.log(chunk);
    // }))

    

})
server.listen(process.argv[2]);