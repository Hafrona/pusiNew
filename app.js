const http = require('http')
const server = http.createServer()
const fs = require("fs")
var url = require('url');
server.listen(8080, "127.0.0.1", () => {
  console.log("http://127.0.0.1:8080")
})
server.on("request",(req,res)=>{
  if(req.url.startsWith('/views')
    || req.url.startsWith('/css')
    || req.url.startsWith('/js')
    || req.url.startsWith('/images')
  ){
    var type = req.url.substr(req.url.lastIndexOf(".")+1,req.url.length)
    res.writeHead(200,{'Content-type':"text/"+type});
    fs.readFile(__dirname + req.url,(err,data)=>{
      if(err){
        console.log(err)
      }
      res.end(data)
    })
  }
})