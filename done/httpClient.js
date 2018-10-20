var http = require('http')

// var url = process.argv[2];
// var url = "http://www.google.com/index.html";

// http.get(url, function(response){
http.get(process.argv[2], function(response){
    // console.log("Got responseponse: "+ response.statusCode);
    response.setEncoding('utf8');
    response.on("data", console.log);
    response.on("error", console.error);


    // listen to responseponse: 
    // response.on("data", function(data){
    //     // try {
    //     //     if (data.setEncoding){
    //     //         data.setEncoding('utf8');
    //     //     }
    //     // } catch (error) {
    //     //     console.error(error);
    //     // }
        
        
    //     // for(let o of data){
    //     //     console.log(o)
    //     // }
    // })
// }).on('error', function(e){
//     console.error('Got Error: ' + response.message);
});