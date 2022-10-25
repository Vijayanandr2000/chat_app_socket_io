const express = require('express');
const socket = require("socket.io");
let http = require("http");

const app = express();
http = http.Server(app);
const io = socket(http);

//when the client connects
io.on('connection', (socket) =>{
    console.log('One client connected');

    setTimeout(()=>{
        socket.send('Hello from server after 5 seconds')
    },5000)

    //when the client connects disconnect
    socket.on('disconnect',()=>{
        console.log('One client disconnected');
    })
})

app.use('/', (req,res) => {
    res.sendFile(__dirname + '/index.html');
});

http.listen(8080, () => {
    console.log('Application Started');
});