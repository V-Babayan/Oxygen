const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 3000;

const server = http.createServer((request, response) => {
  const path = __dirname + (request.url === '/' ? '/index.html' : request.url);

  fs.readFile(path, (error, data) => {
    if (error) {
      response.writeHead(404);
      response.end(JSON.stringify(error));
    } else {
      response.writeHead(200);
      response.end(data);
    }
  });
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
