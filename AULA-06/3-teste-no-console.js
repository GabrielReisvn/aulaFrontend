// ======================
// EXEMLPO DE CONSUMO DE API COM FETCH (PROMISE)
// API usada: https://dog.ceo/api/breeds/image/random
// ======================

// TESTE 1 Fetch basico usando .then()

// fetch() faz uma requisição http para uma api externa

fetch(`https://dog.ceo/api/breeds/image/random`)
    // fetch retorna uma PROMISE (algo que vai chegar depois)

    .then(resposta => resposta.json())
    // resposta.json converte a resposta da api para json
    // json é o ofrmato padrão de dados usados em APIs
    .then(dados => {
        console.log('DADOS COMPLETO API:', dados);
        // mostrar url da imagem
        console.log('🗺️ URL da imagem ', dados.message);
        
        
});

// TESTE 02: Usando async / await
// é uma forma mais moderna e facil de ler
// =====================

// vamos criar uma função assincrona, async permite usar await

async function TestarAPI() {
    
    // await significa esperar até a resposta chegar 

    const resposta2 = await fetch('https://dog.ceo/api/breeds/image/random');

    // converter a resposta em JSON

    const dados2 = await resposta2.json();

    console.log('😺 RESPOSTA DA API; ' ,dados2);
    console.log('URL da imagem ', dados2.message);
    
}

TestarAPI();