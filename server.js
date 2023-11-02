//Create a http  server using node

const http=require('http');

const {create, read, update, deleteFunc}=require("./newModule.js");

const server = http.createServer(function(req, res){
    console.log(req.method, req.url);

    if(req.url=="/create" && req.method=='POST'){
        res.write(JSON.stringify(create(10)));
    }
    else if(req.url=="/read" && req.method=='GET'){
        res.write(JSON.stringify(read()));
    }
    else if(req.url=="/update" && req.method=='PUT'){
        res.write(JSON.stringify(update(0,100)));
    }
    else if(req.url=="/delete" && req.method=='DELETE'){
        res.write(JSON.stringify(deleteFunc(0)));
    }
    res.end();
})
server.listen(5000, function(){
    console.log("Server running on port 5000");
})