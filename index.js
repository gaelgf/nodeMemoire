var http = require('http');

http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<h1>Bonjour l\'ESGI !</h1>');
  res.end();
}).listen(8080);
