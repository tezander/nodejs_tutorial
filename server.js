var http = require("http"),
	url = require ("url");

function start(route, handle){
	function onRequst(request, response) {
		var postData = "";
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " received.");
		route(handle, pathname, response, request);
	}

	http.createServer(onRequst).listen(8888);
	console.log("server has started");

}

exports.start = start;