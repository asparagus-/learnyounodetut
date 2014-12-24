var http = require('http');

http.createServer(function(request, response) {
	response.write('<p>Hey mom!!!!!!!!!!</p>');
	response.end();
}).listen(8888);