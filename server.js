/**
 * Created by SHERRI on 4/23/15.
 */
var http = require('http'),
    fs = require('fs');
http.createServer(function(req,res){
    res.writeHead(200,{
        'Content-Type': 'text/html',
        'Access-Control-allow-Origin' : '*'
    });
    var readStream = fs.createReadStream(__dirname + '/index.html');
    readStream.pipe(res);

}).listen(1337);
console.log('magic on http://localhost:1337');