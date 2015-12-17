var net = require('net');

var streamSet = require('stream-set');

var activeSockets = streamSet();

var server = net.createServer(function (socket) {
  activeSockets.add(socket);
  console.log('new connection');
  socket.on('data', function (data) {
    activeSockets.forEach(function (sock) {
      if (sock !== socket) {
        sock.write(data);
      }
    });
  });
});

server.listen(10000);
