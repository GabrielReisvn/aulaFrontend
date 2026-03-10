// ===================================
// API INTERNA - BACKEND
// ===================================
// feita com Node.js e Express

// as fotos não são mais baixadas da internet, mas sim armazenadas localmente

// data/fotos/
//=====================================

// IMPORTAÇÕES
//importar express para criar o servidor
const express = require('express');

//importar cors para permitir requisições de outros domínios (frontend)
const cors = require('cors'); 

//importa o modulo de arquivos do Node.js para ler os arquivos de fotos
const fs = require('fs');

// importar utilidade para lidar com caminhos de arquivos
const path = require('path');

// importar o arquivo JSON com os dados dos cachorros
const cachorro = require('./data/dogs.json');

// criar aplicação express
const app = express();
    
// definir porta do servidor
const PORT = 3000;

// Habilitar uso de cors
app.use(cors());

//===================================
// SEVIR ARQUIVOS ESTATICOS
//===================================

// Aqui dizemos para o express :
//"TUDO que estiver na pasta data/fotos pode ser acessada pela url"

app.use(
    "/fotos", // rota publica
    express.static(
        path.join(__dirname, "data/fotos")
    // caminho real da pasta no sevidor
    )
);

//===================================
// FUNÇÃo AUXILIAR
//===================================

// Função que recebe um array e retorna um item aleatorio

function sortear(array){
    // gerar um numero aleatorio entre 0 e o tamanho do array
    const i = Math.floor(Math.random() * array.length);
    //math.random() gera um numero entre 0 e 1
    //math.floor() arredonda para baixo
    //array.length é o tamanho do array

    // retornar o item aleatorio
    return array[i];
}

//===================================
// ROTAS API
//===================================

//ROTA 1 - CACHORRO ALEATORIO
// http://localhost:3000/api/cachorros/aleatorio

app.get("/api/cachorros/aleatorio", (req, res)=>{
    // pegar todas as fotos de todas as raças
    // object.values pega os valores de objeto
    // flat transforma em um array
    
    const todasFotos = Object.values(cachorro).flat();

    const item = sortear(todasFotos);

    // responder o cliente para uma json

    res.json({
        // status da resposta
        status: "sucess",  
        message: `http://localhost:${PORT}/fotos/${item}`
    });
});

//ROTA 2 - CACHORRO POR RAÇA
// http://localhost:3000/api/cachorros/husky

app.get("/api/cachorros/:raca", (req, res) => {
    
    // pega o parametro de url (ex. husky)
    const raca = req.params.raca.toLowerCase();

    //verifica se essa raça existe no json
    if (!cachorro[raca]){
        res.status(404).json({
            status: "error",
            message: `raça ${raca} não encontrada`
        });
        return; 
    }
    // sortear foto de raça especifica

    const item = sortear(cachorro[raca]);
    res.json({
        // status da resposta
        status: "sucess",
        message: `http://localhost:${PORT}/fotos/${item}`
    });

});

//===================================
// INICIAR SERVIDOR
//===================================

// iniciar o servidor

app.listen(PORT, () => {
    console.log(`🚀 servidor rodando em http://localhost:${PORT}`);
    console.log(`📂 coloque fotos diretamente na pasta data/fotos`);
    
    
})