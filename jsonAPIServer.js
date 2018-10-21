var http = require('http')
var url = require('url')
// var JSON = require('JSON')

port = process.argv[2];

function getDate(){
    // get the data in the correct format
    var now = new Date();
    var hour = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();

    var out = new Object();
    out.hour = hour;
    out.minute = min
    out.second = sec;
    
    return out;
    // console.log('Date: ' + now)
    
}

function getUNIXDate(){
    var now = new Date();
    var out = new Object();
    out.unixtime = now.getTime();
    return out;
    // console.log(now.getTime())
}

var server = http.createServer(function(req, res){
    queryString = url.parse(req.url, true);
    queryStringPath = queryString['path'].toString();
    console.log( queryStringPath);
    if (req.method == 'GET'){
        if (queryStringPath.includes('parsetime')){
            // return the hours
            console.log('Return the hour')
            var ret = getDate();
            retJ = JSON.stringify(ret);
            // console.log(retJ);
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.write(retJ)
        } else if (queryStringPath.includes('unixtime')){
            console.log('Return unixtime')
            var ret = getUNIXDate();
            retJ = JSON.stringify(ret);
            res.writeHead(200, { 'Content-type': 'application/json' })
            res.write(retJ);
        }
    }
    else {
        res.end('ONLY GET METHODS ALLOWED HERE')
    }
    res.end();
})
server.listen(port);