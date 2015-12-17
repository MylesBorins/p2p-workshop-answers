var net = require('net');

var server = net.createServer(function (c) {
  console.log('client connected');
  c.pipe(c);
});

server.listen(8214, function () {
  console.log('server bound');
});

