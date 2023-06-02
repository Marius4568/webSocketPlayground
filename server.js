const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 3000 });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
    ws.send('echo: ' + message);
  });

  ws.send('Hello! Send me any message and I will echo it back!');
});

console.log("Server started on port 3000");