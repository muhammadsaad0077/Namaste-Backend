const http = require('http')

const server = http.createServer(function(req, res){
    if(req.url === "/getdata"){
        res.end(`<h1 style="text-align: center; display: flex; align-items: center;">I will do something bigger INSHALLAH</h1>`)
    }
    res.end("Hello World")
});

server.listen(7777);