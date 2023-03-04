const net = require('net')
const debug = require('debug')

const server = net.createServer(socket => {
    //nova conexão
    socket.on('data', data => {
        socket.write('Mensagem recebida ' + data)
    })

    socket.on('end', _ => console.log('conexão encerrada'))
})

server.listen(8080, _ => console.log('Servidor TCP ouvindo na porta 8080'))