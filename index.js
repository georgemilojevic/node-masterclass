var http = require('http');
var url = require('url');

var responseObject = {
    "response": {
        "success": false,
        "code": 400,
        "status": "Bad request",
        "message": "Wrong HTTP method or wrong endpoint",
    }
}

http.createServer(function(request, response){

    var parsedUrl = url.parse(request.url, true);
    var path = parsedUrl.pathname;

    path == "/hello" && request.method.toLowerCase() === 'post' ?
      responseObject = {"response": {"success": true, "code": response.statusCode ,"status": "OK", "message": "Payload received"}}
      :
      responseObject

    response.write(JSON.stringify(responseObject));
    response.end();

}).listen(8080, function() {
      console.log('SERVER RUNNING')
});
