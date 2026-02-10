//String
//1
let nome = "Gabriel";
console.log(nome);

//2
let sobrenome = `Viana`
console.log(nome + " " + sobrenome);

//3
let saudaçao = `Olá, ${nome}!`; 
console.log(saudaçao);

//4
let escola = `SENAI`;
console.log(`Bem vindo ao ${escola}!`);

//5 
let estado = "São Paulo";
let cidade = "Guarulhos";
let bairro = "cumbica";
console.log(`Você mora em ${bairro}, ${cidade}, ${estado}.`);

//6 
let msg = "Olá, " + nome + "! Seja bem-vindo";
console.log(msg);

//7 
let comprimento = cidade.length;
console.log(`O comprimento da string é: ${comprimento} .`);

//8-9

console.log(cidade.toUpperCase()); 
console.log(cidade.toLowerCase()); 

//10 
console.log (`${nome} mora em ${bairro}, ${cidade}, ${estado}.`)

//Number
//1
let a = 10;
let b = 20;
let c = a + b;
console.log(c);

//2
let d = c - 12;
console.log(d);
//3
let e = d * 3;
console.log(e);
//4
let f = e / 2;
console.log(f);

//boolean
//1

let maiorDeIdade = true;
console.log(maiorDeIdade);

//2

let boo10 = 19;
if (boo10 > 10) {
    console.log("O número é maior que 10.");
} 

//3 
let podevotar = 17;
if (podevotar >= 18) {
    console.log("Você pode votar.");
};