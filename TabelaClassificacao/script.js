var pessoas = [
  {
    nome: "Rafa",
    imagem: "https://avatars.githubusercontent.com/u/54322854?v=4",
    vitorias: 0,
    derrotas: 0,
    empates: 0,
    pontos: 0
  },
  {
    nome: "Paulo",
    imagem:
      "https://media-exp1.licdn.com/dms/image/C4D03AQHNUGchMAa-Yw/profile-displayphoto-shrink_200_200/0/1556583729599?e=1648080000&v=beta&t=JlJikK8x2gehkNC55nNOYWjrzsfAtj0e8A2FyZOT4eY",
    vitorias: 0,
    derrotas: 0,
    empates: 0,
    pontos: 0
  },
  {
    nome: "Gui",
    imagem:
      "https://www.alura.com.br/assets/img/imersoes/instrutores/guilherme_lima.1636535198.jpg",
    vitorias: 0,
    derrotas: 0,
    empates: 0,
    pontos: 0
  }
];

function novoJogador() {
  var novoJogador = document.getElementById("novoJogador").value;
  var imagemJogador = document.getElementById("imagemJogador").value;
  pessoas.push({
    nome: novoJogador,
    imagem: imagemJogador,
    vitorias: 0,
    derrotas: 0,
    empates: 0,
    pontos: 0
  });
  exibeJogadoresNaTela(pessoas);
  document.getElementById("novoJogador").value = "";
  document.getElementById("imagemJogador").value = "";
}

function zerarPontos() {
  for (i = 0; i < pessoas.length; i++) {
    pessoas[i].vitorias = 0;
    pessoas[i].derrotas = 0;
    pessoas[i].empates = 0;
    pessoas[i].pontos = 0;
  }
  exibeJogadoresNaTela(pessoas);
}

exibeJogadoresNaTela(pessoas);

function calculaPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates;
  jogador.pontos = pontos;
}

function exibeJogadoresNaTela(pessoas) {
  var elemento = "";
  for (i = 0; i < pessoas.length; i++) {
    elemento += "<tr><td><img src=" + pessoas[i].imagem + "></td>";
    elemento += "<td>" + pessoas[i].nome + "</td>";
    elemento += "<td>" + pessoas[i].vitorias + "</td>";
    elemento += "<td>" + pessoas[i].empates + "</td>";
    elemento += "<td>" + pessoas[i].derrotas + "</td>";
    elemento += "<td>" + pessoas[i].pontos + "</td>";
    elemento +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button</td>";
    elemento += "<td><button onClick='adicionarEmpate()'>Empate</button></td>";
    elemento +=
      "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
    elemento +=
      "<td><button onClick='excluirJogador(" +
      i +
      ")'>Excluir</button></td </tr>";
  }
  document.querySelector("#tabelaJogadores").innerHTML = elemento;
}

function adicionarVitoria(i) {
  pessoas[i].vitorias++;
  calculaPontos(pessoas[i]);
  for (y = 0; y < pessoas.length; y++) {
    if (pessoas[y].nome !== pessoas[i].nome) {
      pessoas[y].derrotas++;
    }
  }
  exibeJogadoresNaTela(pessoas);
}

function adicionarEmpate() {
  for (i = 0; i < pessoas.length; i++) {
    pessoas[i].empates++;
    calculaPontos(pessoas[i]);
  }
  exibeJogadoresNaTela(pessoas);
}

function adicionarDerrota(i) {
  pessoas[i].derrotas++;
  for (y = 0; y < pessoas.length; y++) {
    if (pessoas[y].nome !== pessoas[i].nome) {
      pessoas[y].vitorias++;
      calculaPontos(pessoas[y]);
    }
  }
  exibeJogadoresNaTela(pessoas);
}

function excluirJogador(i) {
  pessoas.splice(i, 1);
  exibeJogadoresNaTela(pessoas);
}