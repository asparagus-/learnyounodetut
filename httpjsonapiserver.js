var http = require('http');
var url = require('url');

var server = http.createServer( function (request, response) {

		var q = url.parse(request.url, true);
		if(q['pathname'] == '/api/parsetime' || q['pathname'] == '/api/unixtime') {
			var date = q.query;

			date = new Date(date['iso']);
			if(q['pathname'] == '/api/parsetime') {
				var dateJSON = {
					hour: date.getHours(),
					minute: date.getMinutes(),
					second: date.getSeconds()
				}
				response.writeHead(200, { 'Content-Type': 'application/json' });
				response.write(JSON.stringify(dateJSON));
				response.end();
			}
			else if(q['pathname'] == '/api/unixtime'){
				var dateJSON = {
					unixtime: date.getTime()
				}
				response.writeHead(200, { 'Content-Type': 'application/json' });
				response.write(JSON.stringify(dateJSON));
				response.end();
			}
		}

		response.end();

});

server.listen(process.argv[2]);