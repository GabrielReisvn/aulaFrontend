async function HuskyAPI() {

    const resposta2 = await fetch('https://dog.ceo/api/breed/husky/images/random');

    const dados2 = await resposta2.json();

    console.log('🐶Husky; ' ,dados2);
    console.log('URL da imagem ', dados2.message);
    
}

HuskyAPI();