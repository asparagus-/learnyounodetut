var fs = require('fs');
var path = require('path');
var dir = process.argv[2];
var ext = '.' + process.argv[3];

//listing files
fs.readdir(dir, function(err, files) {
	if(err) throw err;
	for(var i=0; i<files.length; i++){
		var fn = files[i];
		if(path.extname(fn) == ext)
			console.log(fn);
	}
});