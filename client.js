var net = require('net');
var jsonStream = require('duplex-json-stream');

var username = process.argv[2] || 'anonymous';

var socket = jsonStream(net.connect(10000, 'localhost'));

process.stdin.on('data', function (data) {
  var message = data.toString().trim()
  socket.write({
    username: username,
    message: message
  });
});

socket.on('data', function (data) {
  process.stdout.write(`${data.username}> ${data.message}\n`);
});
