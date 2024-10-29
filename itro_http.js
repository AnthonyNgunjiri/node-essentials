// const http = require('http')

// const server = http.createServer((req,res)=>{
// if(req.url=='/'){
//     res.end('welcome to the world of')
// }
//  if(req.url=='/about'){   
//    res.end('here is a short history')
// }
// res.end( `<h1>oops!</h1>
//     <p>sorry the page is not there</p>
//     <a href = "/"> back home </a> ` )
// })

// server.listen(5000)

// const htttp = require ('http')

// const server= htttp.createServer((req,res)=>{
//     console.log('request event')
//     res.end('vindicate me, o lord ,acording to your own righteous')
// })

// server.listen(5000,()=>{
//     console.log('server  listening on port: 5000...')
// })

const http = require('http')
const server = http.createServer((req,res)=>{
if(req.url==='/'){
    res.end('homepage')
}
 if(req.url==='/about'){
    for(i=0;i<1000;i++){
        console.log(`${i}`)
    }
 }
res.end('about homepage')
})

server.listen(3000,()=>{
    console.log('server is running of port 3000...')
})
