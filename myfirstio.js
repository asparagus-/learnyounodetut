var fs = require('fs');
var argv = process.argv;
var buf = fs.readFileSync(argv[2]);
var str = buf.toString();
var count = 0;
for(var i=0; i<str.length; i++){
	if(str[i] == '\n')
		++count;
}
console.log(count);
