async function Func1API() {

    const resposta2 = await fetch('https://dog.ceo/api/breeds/list/all')

    const dados2 = await resposta2.json();
    console.log('==============');
    console.log('===== 01 =====');
    console.log(' DADOS: ' ,dados2.message);
    console.log('==============');
    const racas = dados2.message;
    console.log(Object.keys(racas).length , 'raças na API');
    
}
// Func1API();

async function Func2API() {

    const resposta2 = await fetch('https://dog.ceo/api/breeds/list/all')

    const dados2 = await resposta2.json();
    console.log('==============');
    console.log('===== 02 =====');
    console.log(' DADOS: ' ,dados2.message);
    console.log('==============');

    let totalRacas = 0;
    
    for (let raca in dados2.message) {
        if (dados2.message[raca].length > 0 ){
            totalRacas++;
            console.log('Raça: ', dados2.message ,' Sub-raça(s):', dados2.message[raca]);
            

        }
           
    } 
    console.log(totalRacas);
}
Func2API();