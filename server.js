const http = require('http')
const server = http.createServer(function(req, res){
    if(req.url === "/getdata"){
        res.end("No data available here")
    }
    res.end("Hello World")
});

server.listen(7777);