var net = require('net')

// time format
// "YYYY-MM-DD hh:mm"

// create a server
port = process.argv[2]

var server = net.createServer(function (socket){
    // socket stuff
    console.log('server started')

    // create date-obj
    var date = new Date();
    // get the values
    var YYYY = date.getFullYear();
    var MM = (date.getMonth()+1).toString().padStart(2, '0');
    var DD = date.getDate().toString().padStart(2, '0');
    var hh = date.getHours().toString().padStart(2, '0');
    var mm = date.getMinutes().toString().padStart(2, '0');

    // var timestring = YYYY.concat('-', MM, '-', DD, ' ', hh, ':', mm);
    var timestring = (YYYY +'-' + MM + '-' + DD + ' ' + hh + ':' + mm);
    // console.log('Year: ' + YYYY);
    console.log(timestring);

    console.log('Writing timestring to the socket');
    socket.write(timestring);
    socket.write('\n');

    console.log('\nEnding server')
    socket.end();
    
}).listen(port);

// server.on('error', console.log)
// server.close();



// OFFICIAL SOLUTION
// var net = require('net')

// function zeroFill (i) {
//   return (i < 10 ? '0' : '') + i
// }

// function now () {
//   var d = new Date()
//   return d.getFullYear() + '-' +
//     zeroFill(d.getMonth() + 1) + '-' +
//     zeroFill(d.getDate()) + ' ' +
//     zeroFill(d.getHours()) + ':' +
//     zeroFill(d.getMinutes())
// }

// var server = net.createServer(function (socket) {
//   socket.end(now() + '\n')
// })

// server.listen(Number(process.argv[2]))