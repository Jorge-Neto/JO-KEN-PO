var jogadorNome;
var jogadorPontos = 0;
var jogadorEscolha = 0;

var computadorEscolha = 0;
var computadorPontos = 0;

//Funcao para a mensagem
function mensagem(texto) {
    document.getElementById('mensagem').innerHTML = texto;
}

//Funcao para o nome do jogador
function definirNomeJogador(nome) {
    document.getElementById('jogador-nome').innerHTML = nome;
}

//Sortea entre dois números
function sortear(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//calcula e retorna quem ganhou
function calcularEscolha(jogador, computador) {
    if (jogador == 1 && computador == 1) {
        return 0;
    } else if (jogador == 1 && computador == 2) {
        return 2;
    } else if (jogador == 1 && computador == 3) {
        return 1;
    }
    else if (jogador == 2 && computador == 1) {
        return 1;
    } else if (jogador == 2 && computador == 2) {
        return 0;
    } else if (jogador == 2 && computador == 3) {
        return 2;
    }
    else if (jogador == 3 && computador == 1) {
        return 2;
    } else if (jogador == 3 && computador == 2) {
        return 1;
    } else if (jogador == 3 && computador == 3) {
        return 0;
    }
}

function somarPontoJogador() {
    jogadorPontos++;
    document.getElementById('jogador-pontos').innerHTML = jogadorPontos;
}

function somarPontoComputador() {
    computadorPontos++;
    document.getElementById('computador-pontos').innerHTML = computadorPontos;
}

function selecionar(tipo, escolha) {
    document.getElementById(tipo + '-escolha' + escolha).classList.add('selecionado');
}

function deselecionar(tipo, escolha) {
    document.getElementById(tipo + '-escolha' + escolha).classList.remove('selecionado');
}

//Escolhe a jogada do usuário
function jogar(escolha) {
    jogadorEscolha = escolha;
    selecionar('jogador', jogadorEscolha);

    //Sortear a jogada do COM
    computadorEscolha = sortear(1, 3);
    selecionar('computador', computadorEscolha);

    //Calcular quem ganhou
    var ganhador = calcularEscolha(jogadorEscolha, computadorEscolha);
    if (ganhador == 0) {
        mensagem('Empate!');
    } else if (ganhador == 1) {
        mensagem(jogadorNome + ' levou essa!');
        somarPontoJogador();
    } else if (ganhador == 2) {
        mensagem('Computador levou essa!');
        somarPontoComputador();
    }

    setTimeout(
        function () {
            deselecionar('jogador', jogadorEscolha);
            deselecionar('computador', computadorEscolha);
            
            mensagem(jogadorNome + ' escolha uma opção');
        }, 3000
    );
}

document.getElementById('jogador-escolha1').onclick = function () {jogar(1)};
document.getElementById('jogador-escolha2').onclick = function () {jogar(2)};
document.getElementById('jogador-escolha3').onclick = function () {jogar(3)};

jogadorNome = prompt('Qual é o seu nome?');
mensagem('Bem-vindo ' + jogadorNome + ', está preparado? Escolha uma opção acima');
definirNomeJogador(jogadorNome);

//DOM = Document Object Model