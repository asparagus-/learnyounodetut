var fs = require('fs');
var path = require('path');

module.exports = function (dir, ext, print){
	fs.readdir(dir, function(err, flist){
		if(err) return print(err);
		for(var i=0; i<flist.length; i++){
			var fn = String(flist[i]);
			if(path.extname(fn) == '.' + ext) {
				print(fn);
			}
		}
	});
}