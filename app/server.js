const http = require('http');

const server = http.createServer((req, res) => {
    res.write("Hello DevOps CI/CD Pipelineee develop by bhushan bhau yadav");
    res.end();
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});