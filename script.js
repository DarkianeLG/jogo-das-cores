let arrayCores = [ 
    { r: 255, g: 0, b: 0 },    // Vermelho
    { r: 0, g: 255, b: 0 },    // Verde
    { r: 0, g: 0, b: 255 },    // Azul
    { r: 255, g: 255, b: 0 },  // Amarelo
    { r: 255, g: 165, b: 0 },  //Laranja
    { r: 172, g: 4, b: 205 },   // Roxo escuro
    { r: 75, g: 0, b: 130 },    // Índigo
    { r: 127, g: 255, b: 212 }, // Água-marinha
    { r: 255, g: 20, b: 147 },  // Rosa-choque
    { r: 128, g: 0, b: 0 } 
]

let cor = document.querySelector('.cor');
let certoErrado = document.querySelector('.certo-eraado');
let cores = document.querySelector('.cores');
let jogarNovamente = document.querySelector('jogar-novamente');

function gerarCorAleatoria() {
    let corAleatoria = arrayCores[Math.floor(Math.random() * arrayCores.length)];
    return `rgb(${corAleatoria.r}, ${corAleatoria.g}, ${corAleatoria.b})`;
}

function configurarCores (){
    let botoes = cores.querySelector('button');
    botoes.forEach((botao) => {
        let corBotao = gerarCorAleatoria;

        botao.addEventListener('click', function() {
            if (botao.style.backgroundColor === cor.textContent) {
                certoErrado.textContent = "Correta!";
            } else {
                certoErrado.textContent = "Errada!";
            }
        });
    });
}

function escolherCorCerta (){
    let corCerta = gerarCorAleatoria();
    cor.textContent = corCerta
    header.style.backgroundColor = certa;
}

function reiniciarJogo() {
    certoErrado.textContent = "";
    configurarCores();
    escolherCorCerta();
}

// Inicializar o jogo
reiniciarJogo();

// Adicionar evento ao botão "Jogar de Novo"
jogarNovamente.addEventListener('click', reiniciarJogo);

