//uma array é uma lista que pode armazenar varios valores

let fruta = [`Maçã`, `Banana`, `Uva`];

console.log(fruta[0]);
console.table(fruta);

fruta.push(`morango`);
console.table(fruta);

fruta.pop(); //remove o ultimo elemento do array
console.table(fruta);

fruta.splice(0);

let animais = [`Cachorro`, `Coelho`, `Gato`];
animais.push(`Leão`, `Tigre`, `Onça`);
console.table(animais);