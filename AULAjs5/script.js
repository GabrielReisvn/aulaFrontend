//============================================
// Jogo mario
// Criação das variaveis
let mario = document.querySelector(`.mario`);//encontrar mario
let cano = document.querySelector(`.cano`);//encontrar cano
let nuvem = document.querySelector(`.nuvem`);//encontrar nuvem
let telaFim = document.querySelector(`.fim`);//encontra tela gaem over
let botaoReiniciar = document.querySelector(`.reiniciar`);//encontra o botao


console.log(`======Parada 01=========`);
console.log(`mario`,mario);
console.log(`cano`,cano);
console.log(`nuvem`,nuvem);
console.log(`tela fim`, telaFim);
console.log(`botãoreiniciar`,botaoReiniciar);


function pular(){
    //`pular` predefinido no css, chamada pelo javascript
    mario.classList.add(`pular`);
    setTimeout(function(){
        //voltando ao normal após pular
        mario.classList.remove(`pular`)
    },700)
}

document.addEventListener("keydown",function(){
    console.log(`Tecla presionada, chamando pular()`);
    pular();
})

document.addEventListener("click",function(){
    console.log(`Tecla presionada, chamando pular()`);
    pular();
})

console.log(`======Iniciando loop do jogo=========`);
console.log(`Jogo vai verificar uma colisão`);

let loopJogo = setInterval(function(){
    let posicaoCano = cano.offsetLeft;

    let posicaoMario = +window.getComputedStyle(mario).bottom.replace(`px`,'');
    console.log('cano:', posicaoCano, 'Mario:', posicaoMario);
    
    if (posicaoCano === posicaoMario){
        document.body.backgroundcolor='blue';
}
})

