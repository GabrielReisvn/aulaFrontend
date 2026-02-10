//tipo de dados
//No javaScript, tudo que amarzemamos em uma variável é considerado um tipo de dado, e existem vários tipos de dados, como:

//String: é uma sequência de caracteres, como "Olá, mundo!" ou 'JavaScript é incrível!'.
let nome = "João";  
let mensagem= ' Ambas as formas são válidas para criar strings.';

//Number: é um tipo de dado que representa números, como 42, 3.14 ou -10.
let num = 30;

//Boolean: é um tipo de dado que pode ser verdadeiro (true) ou falso (false), usado para representar condições ou estados.
let isStudent = true;

//Object: é um tipo de dado complexo que pode conter várias propriedades e métodos. Ele é usado para representar entidades do mundo real, como pessoas, carros ou produtos.
let pessoa = {
    nome: "Maria",
    idade: 25,
    isStudent: false
};

//Array: é um tipo de dado que representa uma coleção ordenada de valores. Ele é usado para armazenar múltiplos valores em uma única variável.
let frutas = ["maçã", "banana", "laranja"];

//Null: é um tipo de dado que representa a ausência intencional de valor. Ele é usado para indicar que uma variável não tem um valor válido ou que um objeto não existe.
let telefone = null;

//Undefined: é um tipo de dado que representa a ausência de valor ou a falta de definição. Quando uma variável é declarada, mas não recebe um valor, ela é automaticamente atribuída como undefined.
let endereco;

// o typeof é um operador que retorna uma string indicando o tipo de dado de uma variável ou expressão. Ele é útil para verificar o tipo de dado em tempo de execução.
console.log(typeof nome);



let saudaçao = "Olá, " + nome + "!"; //Concatenação de string
console.log(saudaçao);

let cidade = "São Paulo";
let msg = "Bem-vindo a " + cidade + "!"; //Concatenação de string
let msg$ = `Bem-vindo a ${cidade}!`; //Template literals
console.log(msg$);

//number 
let idade = 17;
let altura = 1.85;

let soma = 23 + 42; 

console.log(soma);

let anoAtual = 2026;
let anoNascimento = 2009;
let idadeAtual = anoAtual - anoNascimento;
console.log(`A sua idade atual é: ${idadeAtual} anos`);
console.log(`Você nasceu em ${anoNascimento} e tem ${idadeAtual} anos em ${anoAtual}`);
//Boolean
//apenas dois valores: verdadeiro (true) ou falso (false)
let criança = false;
let adulto= true; //true ou false
console.log(criança);
console.log(adulto);

idade = 17; 
let podeDirigir = idade >= 18; 
console.log(`Pode dirigir? ${podeDirigir}`); 

//Object
let pessoa1 = {
    nome: "Carlos",
    idade: 30,
    cidade: "Rio de Janeiro"
};

let carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020,
};
console.log(carro.marca); //Acessando a propriedade marca do objeto carro
carro.cor = "Prata"; //Adicionando uma propriedade ao objeto carro
console.log(carro);



//Array
let numeros = [10, 20, 30, 40, 50];
console.log(numeros[0]); //Acessando o primeiro elemento do array numeros





// ################################################
// cama case ---mais famosa
// primeira letra minúscula e as próximas palavras começam com letra maiúscula
let nomeCompleto = "João Silva";

//Pascal case
//todas as palavras começam com letra maiúscula
//usado principalmente para nomear classes e construtores
class PessoaSistema {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }};


//Snake case
//todas as palavras são minúsculas e separadas por underscores (_)
let nome_completo = "Carlos Santos";
//Kebab case
//todas as palavras são minúsculas e separadas por hífens (-)

//        let nome-completo = "Ana Souza"; 
//!!!!!!!!não é permitido em JavaScript, pois o hífen é interpretado como operador de subtração