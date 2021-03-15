const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const {watch, readFile} = require('fs');




const app = express();
const servidor = http.createServer(app);

const io = socketio(servidor,{ 
    cors:{
        origin: "http://localhost:3001",
        methods: ["GET","POST"]
    }
});

io.on('connection', socket => {
    socket.on('conectado', () => {
        console.log('ususario conectado');
        readFile('./valores.txt','UTF-8',(err, file) => {
            if(err){
                throw err;
            }
            socket.emit('textfile', file);
            console.log(file);
        });
    });

    watch('./valores.txt',{encoding:'buffer'},(eventType, filename) => {
        readFile('./valores.txt','UTF-8',(err, file) => {
            if(err){
                throw err;
            }
            socket.emit('textfile', file);
            console.log(file);
        });
    });
});




servidor.listen(3000, () => console.log("servidor inicializado"));