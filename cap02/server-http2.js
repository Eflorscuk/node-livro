const http = require('http')
const routes = new Map()
const phrases = [
    'RRRAARRWHHGWWR',
    'RWGWGWARAHHHHWWRGGWRWRW',
    'WWWRRRRRRGWWWRRRR'
]

routes.set('/', (request, response) => response.end('Open the blast door!\n'))
routes.set('/close', (request, response) => response.end('Close the blast door!\n'))
routes.set('/chewbacca', (request, response) => {
    const randomIndex = Math.ceil(Math.random() * phrases.length) - 1
    const say = phrases[randomIndex]
    response.end(`${say}\n`)
})

const server = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/plain'})
    if(!routes.has(request.url)) return response.end('No doors!\n')
    return routes.get(request.url)(request, response)
})

server.listen(1337, '127.0.0.1', _ => {
    console.log('Server running at http://127.0.0.1:1337/')
})