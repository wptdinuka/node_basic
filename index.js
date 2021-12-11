const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req,res) => {

  /*
 if (req.url === '/') {
      res.end('<h1>WPT-NODE-Website HOME</h1>');
  }
*/

// Build file path
let filePath = path.join(
  __dirname,
  'public',
  req.url === '/' ? 'index.html' : req.url
);
 
// Extention of the file
let extname = path.extname(filePath);

// Initial content type
let contentType = 'text/html';

// Check ext and set content type
switch (extname) {
  case '.js':
    contentType ='text/javascript'
    break;
    case '.css':
    contentType ='text/css'
    break;
    case '.json':
    contentType ='application/json'
    break;
    case '.png':
    contentType ='image/png'
    break;
    case '.jpg':
    contentType ='image/jpg'
    break;
}

// Read file
fs.readFile(filePath, (err, content) => {
  if (err) {
    if (err.code == "ENOENT") {
      // Page not found
      fs.readFile(
        path.join(__dirname, "public", "404.html"),
        (err, content) => {
          res.writeHead(404, { "Content-Type": "text/html" });
          res.end(content, "utf8");
        }
      );
    } else {
      //  Some server error
      res.writeHead(500);
      res.end(`Server Error: ${err.code}`);
    }
  } else {
    // Success
    res.writeHead(200, { "Content-Type": contentType });
    res.end(content, "utf8");
  }
});

});
 
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server runnung on port ${PORT}`));



