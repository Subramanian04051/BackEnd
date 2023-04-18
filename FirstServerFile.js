var http=require('http')
http.createServer(function(req,res)
{
  let  hello="Hello World!"
res.writeHead(200,'{content:text/html}')
res.write(`<h1>${hello}</h1>`)
}).listen(4000)