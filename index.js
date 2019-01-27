var http = require('http');
var url = require('url');
var stringDecoder = require('string_decoder').StringDecoder;

var responseObject = {
    "response": {
        "success": false,
        "code": 400,
        "status": "Bad request",
        "message": "Wrong HTTP method or wrong endpoint",
    }
}

http.createServer(function(request, response){

    var decoder = new stringDecoder('utf-8');
    var payload = '';
    var parsedUrl = url.parse(request.url, true);
    var path = parsedUrl.pathname;
    var responseMessage = {}
    let body = [];

    path == "/hello" && request.method.toLowerCase() === 'post' ?
      responseObject = {"response": {"success": true, "code": 200,"status": "OK", "message": "Payload received"}}
      :
      responseObject

    response.write(JSON.stringify(responseObject));
    response.end();

}).listen(8080, function() {
      console.log('SERVER RUNNING')
});
