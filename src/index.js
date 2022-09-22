const express = require('express');
const engine = require('ejs-mate');
const path = require('path');
const socketIO = require('socket.io');
const http = require('http');


const app = express();
const server = http.createServer(app);
const io = socketIO(server);


//configuraciones
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))


///rutas
app.use(require('./routes/index'));


//sockets
require('./sockets')(io);

///archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

//inicializando el servidor
server.listen(4000, ()=>{
    console.log('Server on port 4000');
});