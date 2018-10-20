var http = require('http')
var fs = require('fs')

var port = process.argv[2];
var file = process.argv[3];

var server = http.createServer(function(req, res){
    // request handling logic
    res.writeHead(200, {'content-type': 'text/plain'})
    
    // represent the requested file as a node stream
    const found = fs.createReadStream(file);
    found.pipe(res);

    // found.setEncoding('utf8')
    // output = '';
    // found.on('data', function(chunk){
    //     // console.log(chunk);
    //     output += chunk;
    // })
    // found.on('end', function(){
    //     console.log(output)
    //     found.pipe(res);
    // })

    // found.on('close', function(){
    //     // stop server
    //     res.end();
    // })
    // found.pipe(res);
    
})
server.listen(port)
