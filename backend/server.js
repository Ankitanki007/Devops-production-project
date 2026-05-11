const http = require('http');

http.createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200);
    res.end('OK');
    return;
  }
  res.writeHead(200);
  res.end('Backend API running! 🚀');
}).listen(5000);

console.log('Backend running on port 5000');
