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

server.listen(8888);
