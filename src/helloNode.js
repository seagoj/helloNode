var http = require('http');
var url = '127.0.0.1';
var port = 1337;

http.createServer(function (req,res) {
   res.writeHead(200, {'Content-Type': 'text/plain'});
   res.end('Hello Node!\n');
}).listen(port, url);
console.log('Server running at http://'+url+':'+port+'/');
