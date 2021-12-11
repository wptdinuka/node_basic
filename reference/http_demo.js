const http = require('http');

// Create server object

http.createServer((req,res) => {
    // Write resonse
    res.write('WPT');
    res.end();
})
.listen(5000, () => console.log('Server runnung...'));