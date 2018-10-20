var http = require('http')
var map = require('through2-map')
var fs = require('fs')

var server = http.createServer(function(req, res){
    req.setEncoding('utf8')
    // console.log(req.method)
    // console.log(req)
    
    let body = []
    req.on('data', (chunk) => {
        // console.log(chunk)
        body.push(chunk);
    }).on('end', () => {
        console.log('Stream ended.')
        body = body.toString();
        console.log(body)

        // create readStream to pipe to response
        // const output = fs.createReadStream(body);

        body.pipe(map(function(chunk){
            varOut = chunk.toString().toUpperCase();
            console.log('body: ' + varOut)
            return varOut;
        })).pipe(body);
        
        // close the server
        res.end();
    });

    

    // res.end();
})
server.listen(process.argv[2]);