var http = require('http')
var map = require('through2-map')
var fs = require('fs')

var server = http.createServer(function(req, res){
    req.setEncoding('utf8')
    // console.log(req.method)
    // console.log(req)
    body = ''
    req.on('data', chunk => {
        console.log(chunk)
        body += chunk;
    })

    const output = fs.createReadStream(body);
    output.pipe(map(function(chunk){
        varOut = chunk.toString().toUpperCase();
        console.log('Output: ' + varOut)
        return varOut;
    })).pipe(output);
    
    

    // req.on('end', ()=>{
    //     const output = fs.createReadStream(body);
    //     output.pipe(map(function(chunk){
    //         varOut = chunk.toString().toUpperCase();
    //         console.log('Output: ' + varOut)
    //         return varOut;
    //     })).pipe(output);
    // })

    

    res.end();
})
server.listen(process.argv[2]);