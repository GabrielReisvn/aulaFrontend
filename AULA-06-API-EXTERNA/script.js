
// SELECIONAR ELEMENTOS DO HTML
//================================

//Pegar a imagem do cachorro
const dogImage = document.getElementById("dogImage");
//elemento onde aparece o nome da raça
const breedName = document.getElementById("breedName");
//botão que busca cachorro aleatório
const randomBtn = document.getElementById("randomBtn");
//botão que busca a raça
const searchBtn = document.getElementById("searchBtn");
//campo de input onde o usuário digita a raça
const breedInput = document.getElementById("breedInput");
// área onde a imagem aparece
const dogArea = document.querySelector(".dog-area");

//endereço base da API
const API_BASE = "https://dog.ceo/api"


// FUNÇÃO QUE CHAMA A API

//função assíncrona que faz requisição HTTP
async function fetchFromApi(endpoint){

    //adiciona classe de loading (mostra "Carregando")
    dogArea.classList.add("loading")

    try {
        //montar a URL completa da requisição
        const url = `${API_BASE}${endpoint}`;

        //mostrar no console a URL Chamada
        console.log("Requisição:", url);

        //faz requisição HTTP para a API
        const response = await fetch(url);

        //Converter para JSON
        const data = await response.json();

        //Mostrar a resposta console
        console.log("Resposta:", data);

        //Verificar se a API retornou com sucesso
        if (data.status === "success") {
            //URL da imagem retornada pela API
            const imageUrl = data.message;
            //colocar a imagem no element <img>
            dogImage.src = imageUrl;
            //extrai a raça da URL
            const breed = imageUrl.split("/")[4];
            //substituir "-" por espaço
            const formattedBreed = breed.replace(/-/g," ");

            //deixa a primeira letra maiúscula
            const finalBreed =
                formattedBreed.charAt(0).toUpperCase() +
                formattedBreed.slice(1);

            //mostra o nome da raça na tela
            breedName.textContent = finalBreed;
        }
    }catch (error){
        //mostrar erro no console
        console.error("Erro:", error)

        //mensagem de erro para o usuário
        breedName.textContent = "Erro ao carregar";

        //remove imagem
        dogImage.src = "";
    } finally {

        // remove estado de loadind
        dogArea.classList.remove("loading");

    }

}
// fetchFromApi ("/breeds/image/random");

//=========================
// FUNÇÂO DE AÇÂO
//=========================

// buscar um cachorro aleatorio

function getRandomDog(){
    fetchFromApi("/breeds/image/random");

}

// busca cachorro por raça
function getBreedDog(){

    // pegar dado digitado
    let breed = breedInput.value.toLowerCase().trim();

    // verificar campo vazio
    if (!breed){
        alert('Digite uma raça!');
        return;
    }
    
    // chamar api com raça digitada
    fetchFromApi(`/breed/${breed}/images/random`);
    
}

//=========================
// EVENTOS
//=========================


// CLIQUE DO BOTÃO
randomBtn.addEventListener('click', getRandomDog);

// CLIQUE NO BOTÃO BUSCAR
searchBtn.addEventListener('click', getBreedDog);

// CLIQUE NA IMAGEM GERA NOVO CACHORRO
dogImage.addEventListener('click', getRandomDog);

//ENTER DENTRO DO INPUT
breedInput.addEventListener('keypress', function(event){
    // se a tecla pressionada for enter
    if(event.key === 'Enter'){
        getBreedDog();
    }

});

getRandomDog();