const http = require('http')

const server = http.createServer((req,res)=>{
if(req.url=='/'){
    res.end('welcome to the world of')
}
 if(req.url=='/about'){   
   res.end('here is a short history')
}
res.end( `<h1>oops!</h1>
    <p>sorry the page is not there</p>
    <a href = "/"> back home </a> ` )
})

server.listen(5000)