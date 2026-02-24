//função é um bloco de código reutilizavel. criado para executar uma tarefa especifica. 

//estrutura de uma função:
function nomeDaFuncao(parametro1 , parametro2){
    //bloco de código
    return resultado;
}

//exemplos de função:
function somar(a, b){
    return a + b;
}
console.log(somar(2,5));

/////////////////////////////////////////////
function realParaDolar(real, cotacao){
    return real / cotacao;
}
console.log(`O valor em dolares é: ${realParaDolar(20, 5.17)}`);
///////////////////////////////////////////////
function dolarParaReal(dolar, cotacao){
    return dolar * cotacao;
}
console.log(`O valor em reais é: ${dolarParaReal(3.2, 5.17)}`);
/////////////////////////////////////////////////
function aumentoSalario(salario){
    return salario *1.25;
}
console.log(aumentoSalario(750));
