const http = require('http')
const server = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/plain'})
    switch (request.url) {
        case '/close':
            response.end('Close the blast doors!\n')
            break
        case '/':
            response.end('Open the blast doors!\n')
            break
        default:
            response.end('No doors!\n')
            break
    }
})

server.listen(1337, '127.0.0.1', _ => console.log('Server running at http://127.0.0.1:1337/'))