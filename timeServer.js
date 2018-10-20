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
    var MM = date.getMonth().toString().padStart(2, '0');
    var DD = date.getDay().toString().padStart(2, '0');
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
    
})
server.listen(port);
server.on('error', console.log)
server.close();

