var http = require('http');
var fs = require('fs');

var onRequest = function(request,response) {

	fs.readFile ('.'+ request.url, function(error, data) {
		if(error) {
			response.writeHead(404, {"Content-Type": "text/plain"});
			response.end("404 File not Found");
		} else {
			response.writeHead(200, {"Content-Type": "text/html"});
			response.end(data);
		}

	});


}

var server = http.createServer(onRequest);
var port = normalizePort(process.env.PORT || 3000);
server.listen(port);



function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}
