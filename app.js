const { NOTFOUND } = require("dns");
const http=require("http");

http.createServer((req, res)=>{
    
    if(req.url=="/"){
        res.end("Here are two URLs in access: '/Hello' or '/Home'");
    }
    else if(req.url.toLowerCase()=="/hello"){
        res.end("Hello");
    }
    else if(req.url.toLowerCase()=="/home"){
        res.end("Home");
    }
    else {
        res.statusCode=404;
        res.setHeader("Content-Type","text/plain");
        res.statusMessage="Not Found";

        res.end();
    }

}).listen(3000,"localhost",()=>{
    console.log("Server is listening...");
})