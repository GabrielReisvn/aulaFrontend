//1
function dobro(numero){
    return numero*2;
}

console.log(`1- ${dobro(5)}`)

//2
function triplo(numero){
    return numero*3;
}

console.log(`2- ${triplo(5)}`)

//3
function somar(a, b){
    return a + b;
}
console.log(`3- ${somar(5, 7)}`)

//4
function produto(a, b){
    return a * b;
}
console.log(`4- ${produto(5, 7)}`)
//5
function realParaDolar(real, cotacao){
    return real / cotacao;
}
console.log(`O valor em dolares é: ${realParaDolar(20, 5.17)}`);

//6
function dolarParaReal(dolar, cotacao){
    return dolar * cotacao;
}

console.log(`6-O valor em reais é: ${dolarParaReal(3.2, 5.17)}`);

//7
function aumentoSalario(salario){
    return salario *1.1;
}
console.log(`7- ${aumentoSalario(750)}`);
//8
function parOuImpar(numero){
    if(numero % 2 == 0){
        return "par";
    }
    else {
        return "impar";
    }
}
console.log(`8- ${parOuImpar(5)}`);

//9
function umAtDez(){
    let i=0;
    while(i<=10){
        console.log(`9- ${i}`);
        i++;
    }

}
console.log(umAtDez());
//10
function ate(numero){
    let i =0;
    while(i<=numero){
        console.log(`10- ${i}`);
    i++;}
    
}
console.log(ate(10));
//11
function somaDez(){
    let acumulador = 0;
    for(let i=0; i<=10; i++){
        acumulador += i;
    }
    return acumulador;
}
console.log(`11- ${somaDez()}`);
//12 
function parCont(n){
    let contador = 0;
    for(let i=0; i<=n; i++){
        if (i %2 ==0){
            contador ++;
            console.log(`estou no ${i}, já contei ${contador} números pares`);
        }
        
    }
    return (`Contei ${contador} números pares`);
}
console.log(`12- ${parCont(10)}`)

//13
function tabuada(numero){
    for(let i=0; i<=10; i++){
        console.log(`${numero} x ${i} = ${numero*i}`);
    }
}
console.log(tabuada(2));

//14
function regresiva(n){
    for(n>0; n--;){
        console.log(n)
    }
}
console.log(regresiva(10));
//15
function ache(x){
    let i = 0;
    while (i!=x){
        console.log(`Não é ${i}`);
        i++;
    }
    if(i == x){
        console.log(`Achei ${x}!`);
    }
}
console.log(ache(3));

//16
function parSomaAte(n){
    let acumulador = 0;
    for(let i=0; i<=n; i++){
        if(i % 2 == 0){
            console.log(`${i} + ${acumulador} = ${i+acumulador}`);
            acumulador += i;
        }
    }
    return acumulador;
}
console.log(parSomaAte(4));

//17
function imparCont(n){
    let contador = 0;
    for(let i=0; i<=n; i++){
        if (i %2 !=0){
            contador ++;
            console.log(`estou no ${i}, já contei ${contador} números impares`);
        }
    }
    return (`Contei ${contador} números impares`);
}
console.log(imparCont(10));
//18
function media2Numero(x,y){
    let m = (x+y)/2;
    return m;
}
console.log(`18- ${media2Numero(5, 7)}`);

//19
function quadrado(n){
    return n*4;
}
console.log(`19- ${quadrado(5)}`);