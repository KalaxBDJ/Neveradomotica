//Servidor
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');


const app = express();
const server = http.createServer(app);
const io = socketIO.listen(server);

app.use(express.static(__dirname+'/public'));

server.listen(3000,function(){
    console.log('Server Listening on port ', 3000);
});


//Serial Communication
const SerialPort = require('serialport');
const Readline = SerialPort.parsers.Readline;

const port = new SerialPort('COM7', {baudRate:9600})

const parser = port.pipe(new Readline({delimeter: '\r\n'}));

parser.on('open',function(){
    console.log('Opened Serial Port');
});

parser.on('data',function(data){
    let temp = parseInt(data,10) + ' *C';
    console.log(temp);
    io.emit('temp',data);
});

port.on('error',function(err){
    console.log(err);
});