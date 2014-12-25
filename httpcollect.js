var http = require('http');
var bl = require('bl');

http.get(process.argv[2], function(req){
	req.pipe(bl(function(err, data){
		if (err) throw err;
		console.log(data.length);
		console.log(String(data));
	}))
})