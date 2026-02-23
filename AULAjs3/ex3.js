//1
let cor = [`Vermelho`, `Azul`, `Verde`];
console.log(cor[1]);

//2
numero = [1, 2, 3, 4, 5];
console.log(numero[0, 4]);

//3
let frutas =[`Maçã`, `Banana`];
frutas.push(`Uva`);

//4
let nome = [`Maria`, `João`, `Pedro`, `Ana`];
nome.pop();

//5
let times = [`São Paulo`, `Corinthians`, `Palmeiras`];
console.log(times.length);

//6
let animais = [`Cachorro`, `Gato`, `Coelho`];
console.log(animais[0], animais[1], animais[2]);


//7
let carros = [`Fusca`, `Gol`, `Uno`];
carros.splice(1, 1, `Corsa`);
console.table(carros);

//8
let linguagens = [`JavaScript`, `Python`, `Java`];
if (linguagens.includes(`JavaScript`)) {
    console.log(`JavaScript está no array.`);
}

//9
let numeros = [10, 20, 30, 40, 50];
console.log(numeros[0] + numeros[1] + numeros[2] + numeros[3] + numeros[4]);

//10
let words=[];
words.push(`Hello`, `World`, `javaScript`);
console.table(words);
