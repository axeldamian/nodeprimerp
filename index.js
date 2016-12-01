/*Leer y devolver un fichero*/

var http = require("http");
var url = require("url");
var fs = require("fs");
var server = http.createServer();

server.on("request", function(req,res){
	var urlData = url.parse(req.url);
	var path = urlData.pathname;
	var filePath = "public" + path ;
	fs.exists( filePath, function(exists){
		if (exists){
			fs.readFile("public"+path, function (err,data){
				if(err){
					res.writeHead(500);
					res.end("ha ocurrido algo malo");
				}
				else{
					res.end(data);
				}
		})
		}
	else{
		res.writeHead(404);
		res.end("no existe!");
	}
});
});

server.listen(process.env.PORT || 3005);