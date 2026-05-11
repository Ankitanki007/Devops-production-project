const http = require('http');

http.createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200);
    res.end('OK');
    return;
  }
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(`
    <html>
      <body>
        <h1>Frontend Running! 🚀</h1>
        <p>DevOps Project by Ankit</p>
      </body>
    </html>
  `);
}).listen(80);

console.log('Frontend running on port 80');
