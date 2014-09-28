var http = require('http');
var https = require('https');
var request = require('request');

//
// Create your target server
//
http.createServer(function (req, res) {

	
	try{
		var target = req.url;
		console.log(target);
		var origTarget = request(target);
		req.pipe(origTarget).pipe(res);

		origTarget.on('error', function(er){
			console.log(er);
			console.error(er.stack);
		});
	}
	catch(e)
	{
		console.log(e);
	}

	req.on('error', function(er){
		console.error(er.stack);
	});

	res.on('error', function(er){
		console.error(er.stack);
	});

}).listen(9000);