//Criação de variaveis
let personagem = document.querySelector("#personagem");
let personagemImg = document.querySelector("#personagem img");
let personagemX = 200; //Posicionamento horizontal
let personagemY = 200;
let personagemLargura = 75;
let personagemAltura = 90;
let velocidade = 10;

let alturaContainer = 500;
let larguraContainer = 700;
let alturaContainerDiv = 600;

//Evento de clique em uma tecla
document.addEventListener("keydown",(e)=>{
    e.preventDefault();
    let tecla = e.key;
    switch(tecla){
        case 'ArrowUp':
            personagemImg.classList.add("movimento","paracima");
            personagemImg.classList.remove("parabaixo","paraesquerda","paradireita");
            personagemY -= velocidade;
            if(personagemY <= 140){
                personagemY = 140;
            }
            personagem.style.top = personagemY+"px";
        break;
        case 'ArrowDown':
            personagemImg.classList.add("movimento","parabaixo");
            personagemImg.classList.remove("paracima","paraesquerda","paradireita");
            personagemY += velocidade;
            if(personagemY >= alturaContainer - personagemAltura){
                personagemY = alturaContainer - personagemAltura;
            }
            personagem.style.top = personagemY+"px";
        break;
        case 'ArrowLeft':
            personagemImg.classList.add("movimento","paraesquerda");
            personagemImg.classList.remove("parabaixo","paracima","paradireita");
            personagemX -= velocidade;
            if(personagemX <= 90){
                personagemX = 90;
            }
            personagem.style.left = personagemX+"px";
        break;
        case 'ArrowRight':
            personagemImg.classList.add("movimento","paradireita");
            personagemImg.classList.remove("parabaixo","paraesquerda","paracima");
            personagemX += velocidade;
            if(personagemX >= larguraContainer - personagemLargura){
                personagemX = larguraContainer - personagemLargura;
            }
            personagem.style.left = personagemX+"px";
        break;
    }
});

//Evento de soltar uma tecla
document.addEventListener("keyup",(e)=>{
    e.preventDefault();

    let tecla = e.key;

    switch(tecla){
        case 'ArrowUp':
        case 'ArrowDown':
        case 'ArrowLeft':
        case 'ArrowRight':
            personagemImg.classList.remove("movimento");
        break;
    }
});