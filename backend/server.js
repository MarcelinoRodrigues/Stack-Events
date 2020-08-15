let http = require('http')

http.createServer(function (req,res){
    res.end("ola")
}).listen(9000)

console.log("servidor criado")