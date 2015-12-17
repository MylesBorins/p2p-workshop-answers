var net = require('net');

var client = net.connect({
  port: 8214
}, function () {
  process.stdin.on('data', function (data) {
    client.write(data);
  });
});

client.on('data', function (data) {
  process.stdout.write(data);
})
