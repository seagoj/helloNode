var http = require('http');
var url = '127.0.0.1';
var port = 1337;

http.createServer(function (req,res) {
    var util = require('util'),
        spawn = require('child_process').spawn,
        ls = spawn('ls', ['-lh', '/usr']);

    ls.stdout.on('data', function (data) {
        console.log('stdout: ' + data);
    });

    ls.stderr.on('data', function (data) {
        console.log('stderr: ' + data );
    });

    ls.on('exit', function (code){
        console.log('child process exited with code ' + code);
    });

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello Node!\n');
}).listen(port, url);
console.log('Server running at http://'+url+':'+port+'/');
