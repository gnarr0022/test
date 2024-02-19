const { lstat } = require('fs');
const http = require('http');
const PORT = 3000;
const server = http.createServer((req, res) =>{
    if(req.url == '/'){
        res.end('ok')
    }
})
server.listen(PORT, ()=>{
    console.log(`server running at port : ${PORT}`)
});