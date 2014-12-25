var http = require('http')
var bl = require('bl')

function _get(args, again){
	http.get(process.argv[args], function(req){
		req.pipe(bl(function(err,data){
			console.log(String(data))
			if(args<5){
				again(++args, again)
			}
		}))
	})
}

_get(2, _get);

