var mod = require('./extcountmodule');
var dir = process.argv[2];
var ext = process.argv[3];

function print(it){
	console.log(it);
}


mod(dir, ext, print);