var http = require('http')
var url = require('url')
// var JSON = require('JSON')

port = process.argv[2];

function getDate(timeGot){
    // get the data in the correct format
    var now = new Date(timeGot);
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

function getUNIXDate(timeGot){
    var now = new Date(timeGot);
    var out = new Object();
    out.unixtime = now.getTime();
    return out;
    // console.log(now.getTime())
}

var server = http.createServer(function(req, res){
    queryString = url.parse(req.url, true);
    queryStringPath = queryString['path'].toString();
    locT = queryStringPath.search('=');
    timeGot = queryStringPath.substring(locT+1);
    console.log('Return the hour')
    if (req.method == 'GET'){
        if (queryStringPath.includes('parsetime')){
            var ret = getDate(timeGot);
            retJ = JSON.stringify(ret);
            // console.log(retJ);
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.write(retJ)
        } else if (queryStringPath.includes('unixtime')){
            console.log('Return unixtime')
            var ret = getUNIXDate(timeGot);
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


// OFFICIAL SOLUTION: 
// var http = require('http')
//     var url = require('url')

//     function parsetime (time) {
//       return {
//         hour: time.getHours(),
//         minute: time.getMinutes(),
//         second: time.getSeconds()
//       }
//     }

//     function unixtime (time) {
//       return { unixtime: time.getTime() }
//     }

//     var server = http.createServer(function (req, res) {
//       var parsedUrl = url.parse(req.url, true)
//       var time = new Date(parsedUrl.query.iso)
//       var result

//       if (/^\/api\/parsetime/.test(req.url)) {
//         result = parsetime(time)
//       } else if (/^\/api\/unixtime/.test(req.url)) {
//         result = unixtime(time)
//       }

//       if (result) {
//         res.writeHead(200, { 'Content-Type': 'application/json' })
//         res.end(JSON.stringify(result))
//       } else {
//         res.writeHead(404)
//         res.end()
//       }
//     })
//     server.listen(Number(process.argv[2]))