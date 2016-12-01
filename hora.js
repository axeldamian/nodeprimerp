var http = require("http");

var server = http.createServer();

var time = require('time');
var now = new time.Date();
var fechaString = now.toString();
var soloHora = fechaString.substring(16, 24);

server.on("request",function(req,res){
	res.end("la hora es: "+soloHora);
} );
server.listen(process.env.PORT || 3000);