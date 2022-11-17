const http= require("http");

const fs=require("fs");

const PORT= 2000; 
const hostname="localhost";
const home=fs.readFileSync("./index.html","utf-8");
const about=fs.readFileSync("./about.html","utf-8");
const contact=fs.readFileSync("./contact.html","utf-8");

const server=http.createServer((req,res)=>{
    if(req.url==="/home"){
    res.end(home);}
    if(req.url==="/about"){
    res.end(about);}
    if(req.url==="/contact"){
    res.end(contact);}
    else{
        res.end(<h1>Error 404 : PAGE NOT FOUND</h1>);
    }


});

server.listen(PORT,hostname,()=>{
    console.log(" working is fine on http://localhost:2000");
})
