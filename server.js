const path = require("path");
const http = require('http');
const express = require("express");
const socketio = require('socket.io');


const app = express();

const server = http.createServer(app)
const io = socketio(server);

io.on('connection',socket => {
    console.log("new connection");

    socket.emit("message","welcome to chat");
    socket.broadcast.emit("message","kullanici girdi");

    socket.on('disconnect',()=> {
        io.emit('message','kullanıcı çıktı');
        
    });    
    socket.on('chat',(e) => {
        console.log(e);
        
    });
    
})


app.use(express.static(path.join(__dirname,'public')));
const PORT = 3000 || process.env.PORT;

server.listen(PORT,() => console.log('Server running on port ',PORT));
