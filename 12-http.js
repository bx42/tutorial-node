const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url ==='/'){
        res.end('welcome to home page')
    } else if(req.url === '/about'){
        res.end('heres about page')
    }else{
        res.end(
            '<h1>error 404</h1>'
        )
    }
})

server.listen(5000)