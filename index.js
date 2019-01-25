var http = require('http');

var httpServer = http.createServer(function(req, res){
  runServer(req, res);
  res.end("-> Hi! <-");

});

httpServer.listen(3000, function(){
  console.log('SERVER RUNNING')
});


