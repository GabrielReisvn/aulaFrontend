
//ao pressionar teclas r,b ou a
//1
document.addEventListener("keydown",function(e){
    if (e.key=== "r"){
        document.body.style.backgroundColor= "red";
    } else if(e.key ==="b"){
        document.body.style.backgroundColor= "blue";
    }
     else if(e.key ==="g"){
        document.body.style.backgroundColor= "green";
    } else{
        document.body.style.backgroundColor= "#8b8b8b";

    }
    
})

//2
document.addEventListener("keydown",function(e){
    if (e.key.toLowerCase() === "r"){
        document.body.style.backgroundColor= "red";
    } else if(e.key.toLowerCase() ==="b"){
        document.body.style.backgroundColor= "blue";
    }
     else if(e.key.toLowerCase() ==="g"){
        document.body.style.backgroundColor= "green";
    } else{
        document.body.style.backgroundColor= "#8b8b8b";

    }
    
})
//3
document.addEventListener("keydown",function(e){
    if (e.key.toLowerCase() === "r"){
        document.body.style.backgroundColor= "red";
    } else if(e.key.toLowerCase() ==="b"){
        document.body.style.backgroundColor= "blue";
    }
     else if(e.key.toLowerCase() ==="g"){
        document.body.style.backgroundColor= "green";
    } else{
        document.body.style.backgroundColor= "#8b8b8b";

    }
     console.log(`tecla ultilizada ${e.key}`);
})


//4,5,6
document.addEventListener("keydown",function(e){
    if (e.key.toLowerCase() === "r"){
        document.body.style.backgroundColor= "red";
        document.body.H2.innerHTML=`VERMELHOOO!!!!!!`;

    } 
    else if(e.key.toLowerCase() ==="b"){
        document.body.style.backgroundColor= "blue";
        document.body.H2.innerHTML=`AZULLL!!!!!!`;
    }
    else if(e.key.toLowerCase() ==="g"){
        document.body.style.backgroundColor= "#33f83dff";
        document.body.H2.innerHTML=`VERDE!!!!!!`;
    } 
    else if(e.key.toLowerCase() ==="y"){
        document.body.style.backgroundColor= "#f8f533ff";
        document.body.H2.innerHTML=`AMARELOOO!!!!!!`;
    } 
    else if(e.key.toLowerCase() ==="p"){
        document.body.style.backgroundColor= "#a933f8ff";
        document.body.H2.innerHTML=`ROXOOOO!!!!!!`;
    } 
    else{
        document.body.style.backgroundColor= "#8b8b8b";
        document.body.H2.innerHTML=`tecla ultilizada ${e.key} sem cor definida`;

    }
    // console.log(`tecla ultilizada ${e.key}`);
    
})

//7

let mapCor={
    r:{
        cor: `Vermelho`
    },
    b:{
        cor: `Azul`
    },
    g:{
        cor: `Verde`
    },
    y:{
        cor: `Amarelo`
    },
    p:{
        cor:`Roxo`
    },
    x:{
        cor:`Padrão`

    }
}
document.addEventListener("keydown",function(e){
    if (e.key.toLowerCase() === "r"){
        document.body.style.backgroundColor= "red";
        document.body.H2.innerHTML=`VERMELHOOO!!!!!!`;

    } 
    else if(e.key.toLowerCase() ==="b"){
        document.body.style.backgroundColor= "blue";
        document.body.H2.innerHTML=`AZULLL!!!!!!`;
    }
    else if(e.key.toLowerCase() ==="g"){
        document.body.style.backgroundColor= "#33f83dff";
        document.body.H2.innerHTML=`VERDE!!!!!!`;
    } 
    else if(e.key.toLowerCase() ==="y"){
        document.body.style.backgroundColor= "#f8f533ff";
        document.body.H2.innerHTML=`AMARELOOO!!!!!!`;
    } 
    else if(e.key.toLowerCase() ==="p"){
        document.body.style.backgroundColor= "#a933f8ff";
        document.body.H2.innerHTML=`ROXOOOO!!!!!!`;
    } 
    else{
        document.body.style.backgroundColor= "#8b8b8b";
        document.body.H2.innerHTML=`tecla ultilizada ${e.key} sem cor definida`;

    }})


//8
function exibirRgb(cor,nomeCor){
    let lisrgb ={
        "red": "rgb(255, 109, 109)",
        "blue": "rgb(34, 131, 221)",
        "green": "rgb(51, 248, 61)",
        "#yellow": "rgb(248, 245, 51)",
        "rox": "rgb(169, 51, 248)",
        "gray": "rgb(139, 139, 139)"
    };
    console.log(`Cor aplicada: ${nomeCor}`)
    console.log(`Valor: ${lisrgb[cor] || cor}`)
}

document.addEventListener("keydown",function(e){
    if (e.key.toLowerCase() === "r"){
        document.body.style.backgroundColor= "rgb(255, 109, 109)";
        document.body.H2.innerHTML=`VERMELHOOO!!!!!!`;
        exibirRgb("red", "Vermelho");
    } 
    else if(e.key.toLowerCase() ==="b"){
        document.body.style.backgroundColor= "rgb(34, 131, 221)";
        document.body.H2.innerHTML=`AZULLL!!!!!!`;
        exibirRgb("blue", "Azul");
    }
    else if(e.key.toLowerCase() ==="g"){
        document.body.style.backgroundColor= "#33f83dff";
        document.body.H2.innerHTML=`VERDE!!!!!!`;
        exibirRgb("green", "Verde");
    } 
    else if(e.key.toLowerCase() ==="y"){
        document.body.style.backgroundColor= "#f8f533ff";
        document.body.H2.innerHTML=`AMARELOOO!!!!!!`;
        exibirRgb("yellow", "Amarelo");
    } 
    else if(e.key.toLowerCase() ==="p"){
        document.body.style.backgroundColor= "#a933f8ff";
        document.body.H2.innerHTML=`ROXOOOO!!!!!!`;
        exibirRgb("rox", "Roxo");
    } 
    else{
        document.body.style.backgroundColor= "#8b8b8b";
        document.body.H2.innerHTML=`tecla ultilizada ${e.key} sem cor definida`;
        exibirRgb("gray", "Cinza");
    }
    // console.log(`tecla ultilizada ${e.key}`);
    
})

//9
document.addEventListener("keydown", function(e) {
    const tecla = e.key.toLowerCase();
    
    if (cores[tecla]) {
        const cor = lisrgb[tecla];
        document.body.style.backgroundColor = lisrgb.nomeCor;
        document.body.H2.innerHTML = `${lisrgb.nome} definida!`;
        exibirRgb(tecla, lisrgb.nome);
    } else {
        document.body.style.backgroundColor = "#8b8b8b";
        document.body.H2.innerHTML = `tecla ${e.key} sem cor definida`;
        exibirRgb("gray", "Cinza");
    }
});

//10
document.addEventListener("keydown",function(e){
    if (e.key.toLowerCase() === "r"){
        document.body.style.backgroundColor= "rgb(255, 109, 109)";
        document.body.H2.innerHTML=`VERMELHOOO!!!!!!`;
        exibirRgb("red", "Vermelho");
    } 
    else if(e.key.toLowerCase() ==="b"){
        document.body.style.backgroundColor= "rgb(34, 131, 221)";
        document.body.H2.innerHTML=`AZULLL!!!!!!`;
        exibirRgb("blue", "Azul");
    }
    else if(e.key.toLowerCase() ==="g"){
        document.body.style.backgroundColor= "#33f83dff";
        document.body.H2.innerHTML=`VERDE!!!!!!`;
        exibirRgb("green", "Verde");
    } 
    else if(e.key.toLowerCase() ==="y"){
        document.body.style.backgroundColor= "#f8f533ff";
        document.body.H2.innerHTML=`AMARELOOO!!!!!!`;
        exibirRgb("yellow", "Amarelo");
    } 
    else if(e.key.toLowerCase() ==="p"){
        document.body.style.backgroundColor= "#a933f8ff";
        document.body.H2.innerHTML=`ROXOOOO!!!!!!`;
        exibirRgb("rox", "Roxo");
    }
     
    else{
        document.body.style.backgroundColor= "#8b8b8b";
        document.body.H2.innerHTML=`tecla ultilizada ${e.key} sem cor definida`;
        exibirRgb("gray", "Cinza");
    }
    // console.log(`tecla ultilizada ${e.key}`);
    
})
let darkMode=false;
document.addEventListener("keydown",function(e){
    if (e.key.toLowerCase() === "n"){
        darkMode = !darkMode;
        if(darkMode){
            document.body.style.backgroundColor = "#000";
            document.body.style.color = "#fff";
            console.log(`modo escuro ativado`);}

        else{
        document.body.style.backgroundColor = "#fff";
        document.body.style.color = "#000";
        console.log(`modo escuro desativado`);
    }
}
})

let whiteMode = false;
docum0ent.addEventListener("keydown",function(e){
     if (e.key.toLowerCase() === "d"){
        whiteMode =!whiteMode;
        if(whiteMode){
            document.body.style.backgroundColor = "#000";
            document.body.style.color = "#fff";
            console.log(`modo escuro ativado`);}

        else{
        document.body.style.backgroundColor = "#fff";
        document.body.style.color = "#000";
        console.log(`modo escuro desativado`);
    }
}
})








/////////// codigo freito!!!!!!!!!!!


// Histórico educacional removido para clareza

//Objeto com mapeamento de cores
const cores = {
    r: { cor1: "rgb(255, 109, 109)", nome: "Vermelho", texto: "VERMELHOOO!!!!!!" },
    b: { cor1: "rgb(34, 131, 221)", nome: "Azul", texto: "AZULLL!!!!!!" },
    g: { cor1: "#33f83dff", nome: "Verde", texto: "VERDE!!!!!!" },
    y: { cor1: "#f8f533ff", nome: "Amarelo", texto: "AMARELOOO!!!!!!" },
    p: { cor1: "#a933f8ff", nome: "Roxo", texto: "ROXOOOO!!!!!!" }
};

 //Mapa RGB para console
lisrgb = {
    "red": "rgb(255, 109, 109)",
    "blue": "rgb(34, 131, 221)",
    "green": "rgb(51, 248, 61)",
    "yellow": "rgb(248, 245, 51)",
    "rox": "rgb(169, 51, 248)",
    "gray": "rgb(139, 139, 139)"
};

//9 - Função para exibir RGB no console
function exibirRgb(cor, nomeCor) {
    console.log(`Cor aplicada: ${nomeCor}`);
    console.log(`Valor: ${lisrgb[cor] || cor}`);
}

// Variáveis de modo
darkMode = false;

// Listener único consolidado
document.addEventListener("keydown", function(e) {
    const tecla = e.key.toLowerCase();

    //Modo escuro (tecla n)
    if (tecla === "n") {
        darkMode = !darkMode;
        if (darkMode) {
            document.body.style.backgroundColor = "#000";
            document.body.style.color = "#fff";
            console.log(`modo escuro ativado`);
        } else {
            document.body.style.backgroundColor = "#fff";
            document.body.style.color = "#000";
            console.log(`modo escuro desativado`);
        }
        return;
    }

    //Mudança de cores (teclas r, b, g, y, p)
    if (cores[tecla]) {
        const cor = cores[tecla];
        document.body.style.backgroundColor = cor.cor1;
        document.body.H2.innerHTML = cor.texto;
        exibirRgb(tecla, cor.nome);
    } else {
        document.body.style.backgroundColor = "#8b8b8b";
        document.body.H2.innerHTML = `tecla ultilizada ${e.key} sem cor definida`;
        exibirRgb("gray", "Cinza");
    }

    console.log(`tecla ultilizada ${e.key}`);
});