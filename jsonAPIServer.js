var http = require('http')
var url = require('url')

port = process.argv[2];

var server = http.createServer(function(req, res){
    queryString = url.parse(req.url, true);
    queryStringPath = queryString['path'].toString();
    // console.log(typeof queryStringPath);
    if (req.method == 'GET'){
        if (queryStringPath.includes('parsetime')){
            // return the hours
            console.log('Return the hour')
        } else if (queryStringPath.includes('unixtime')){
            console.log('Return unixtime')
        }
    }
    res.end();
})
server.listen(port);