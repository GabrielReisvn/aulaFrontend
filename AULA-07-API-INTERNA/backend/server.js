// importar modulo HTTP nativo do node.js
// esse nodulo permite criar servidores web

const http = require("http");
const { log } = require("console");

//Servidor
//FUNÇAO SERA EXECUTADA TODA VEZ QUE ACESSAREM SERVIDO

const server = http.createServer((req, res) => {
    // definir status res
    res.writeHead(200, {'content-type': 'text/html'});

    // enviar resposta ao navegador

    res.end(`
        <h1> API CACHORROS</h1>
        <p>Servidor funcionando</p>
    `);
});

server.listen(3000, () => {
    console.log('servidor rodando em http://localhost:3000');
});