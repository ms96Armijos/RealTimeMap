module.exports = io => {
    io.on('connection', (socket) =>{
        console.log('user connected');
        socket.on('userCoordinates', coords =>{
            socket.broadcast.emit('newUserConnected', coords);
        })
    });
}