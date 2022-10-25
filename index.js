const express = require('express');
const socket = require("socket.io");
let http = require("http");

const app = express();
http = http.Server(app);
const io = socket(http);

app.use('/', (req,res) => {
    res.sendFile(__dirname + '/index.html');
});

http.listen(8080, () => {
    console.log('Application Started');
});