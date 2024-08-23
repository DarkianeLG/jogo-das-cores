let header = document.querySelector('header');
let coresContainer = document.querySelector('.cores');
let corDisplay = document.querySelector('.cor');
let certoErrado = document.querySelector('.certo-errado');
let jogarNovamenteBtn = document.querySelector('.jogar-novamente');
let modoBotoes = document.querySelectorAll('.modo');
let botoesCores = document.querySelectorAll('.cores button');
let numCores = 3; // Defina o padrão para o modo fácil
let corEscolhida;

// Função para gerar uma cor aleatória
function gerarCorAleatoria() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// Função para iniciar o jogo
function iniciarJogo() {
    // Limpar estado anterior
    certoErrado.textContent = '';
    header.style.backgroundColor = ''; // Reinicia a cor do header para o padrão

    // Gerar cores aleatórias e escolher uma delas
    let cores = [];
    for (let i = 0; i < numCores; i++) {
        cores[i] = gerarCorAleatoria();
    }
    corEscolhida = cores[Math.floor(Math.random() * numCores)];
    corDisplay.textContent = corEscolhida.toUpperCase();

    // Configurar botões de cores
    botoesCores.forEach((botao, i) => {
        if (i < numCores) {
            botao.style.display = 'block';
            botao.style.backgroundColor = cores[i];
        } else {
            botao.style.display = 'none';
        }
    });
}

// Função para mudar todas as cores dos botões para a cor escolhida
function mudarCores(cor) {
    botoesCores.forEach(botao => {
        botao.style.backgroundColor = cor;
    });
}

// Configurar event listeners nos botões de cor (apenas uma vez)
botoesCores.forEach((botao) => {
    botao.addEventListener('click', function () {
        if (botao.style.backgroundColor === corEscolhida) {
            certoErrado.textContent = 'CORRETA!';
            header.style.backgroundColor = corEscolhida;
            mudarCores(corEscolhida); // Muda todos os botões para a cor correta
        } else {
            certoErrado.textContent = 'TENTE NOVAMENTE!';
            botao.style.backgroundColor = '#232323';
        }
    });
});

// Configurar event listeners nos botões de modo
modoBotoes.forEach(botao => {
    botao.addEventListener('click', function () {
        modoBotoes.forEach(btn => btn.classList.remove('selected'));
        botao.classList.add('selected');
        numCores = parseInt(botao.getAttribute('data-num'));
        iniciarJogo();
    });
});

// Configurar o botão de jogar novamente
jogarNovamenteBtn.addEventListener('click', iniciarJogo);

// Iniciar o jogo com o modo fácil selecionado
document.addEventListener('DOMContentLoaded', function () {
    modoBotoes.forEach(botao => {
        if (botao.textContent === 'FÁCIL') {
            botao.classList.add('selected');
            numCores = parseInt(botao.getAttribute('data-num'));
        }
    });
    iniciarJogo();
});
