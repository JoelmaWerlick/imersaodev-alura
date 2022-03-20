var carta1 = 
{
    nome: "Harvey",
    imagem: "https://i.pinimg.com/736x/57/68/49/5768496a2db6c2e1fa378f17e357b90b.jpg",
    atributos:
    {
        Ataque: 8,
        Defesa: 6,
        Inteligência: 9,
        Velocidade: 5
    }
}
var carta2 = 
{
    nome: "Mike",
    imagem: "https://www.serietotaal.nl/images/nieuws/t/wovs9855njeo-full.jpg",
    atributos:
    {
        Ataque: 10,
        Defesa: 8,
        Inteligência: 6,
        Velocidade: 8
    }
}
var carta3 = 
{
    nome: "Donna",
    imagem: "https://i1.wp.com/nerdtatuado.com.br/wp-content/uploads/2020/12/5acec027d2170.image_.jpg?ssl=1",
    atributos:
    {
        Ataque: 7,
        Defesa: 5,
        Inteligência: 10,
        Velocidade: 4
    }
}
var carta4 = 
{
    nome: "Louis",
    imagem: "https://br.web.img3.acsta.net/r_1280_720/pictures/16/07/27/12/10/383490.jpg",
    atributos:
    {
        Ataque: 8,
        Defesa: 7,
        Inteligência: 6,
        Velocidade: 6
    }
}
var carta5 = 
{
    nome: "Sheila",
    imagem: "https://bilder.fernsehserien.de/gfx/person_1000/r/rachael-harris-w-893.jpg.jpg",
    atributos:
    {
        Ataque: 10,
        Defesa: 9,
        Inteligência: 4,
        Velocidade: 7
    }
}
var carta6 = 
{
    nome: "Cretchen",
    imagem: "https://br.web.img3.acsta.net/pictures/19/08/19/11/53/2177650.jpg",
    atributos:
    {
        Ataque: 9,
        Defesa: 8,
        Inteligência: 3,
        Velocidade: 7
    }
}
var carta7 = 
{
    nome: "Jessica",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhGVqzoIHFOc3hqSwSgHWDBtc2RKGRMMQHUxiR7X97yYiHhCJ7NIIeWKns7ALkIshe9h0&usqp=CAU",
    atributos:
    {
        Ataque: 8,
        Defesa: 7,
        Inteligência: 8,
        Velocidade: 8
    }
}
var carta8 = 
{
    nome: "Robert",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhGVqzoIHFOc3hqSwSgHWDBtc2RKGRMMQHUxiR7X97yYiHhCJ7NIIeWKns7ALkIshe9h0&usqp=CAU",
    atributos:
    {
        Ataque: 6,
        Defesa: 8,
        Inteligência: 10,
        Velocidade: 8
    }
}
var carta9 = 
{
    nome: "Cameron",
    imagem: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSJxTySH1sU9GLT_ZVA9srr_0nau-ltYaBc77hH5hVx9T_2v3Rd",
    atributos:
    {
        Ataque: 6,
        Defesa: 5,
        Inteligência: 10,
        Velocidade: 6
    }
}
var carta10 = 
{
    nome: "Allison",
    imagem: "https://m.media-amazon.com/images/M/MV5BNTlkMzUwNzYtZjE4ZS00MDQ4LWE0M2YtMWU3MDJjODQzOTAyXkEyXkFqcGdeQXVyNjcwNDUyODM@._V1_.jpg",
    atributos:
    {
        Ataque: 7,
        Defesa:8,
        Inteligência: 9,
        Velocidade: 7
    }
}

var baralho = [carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8, carta9, carta10]

var carta_maquina 
var carta_jogador

function sortear_carta()
{
    var indice_carta_maquina = parseInt (Math.random() * 10)
    carta_maquina = baralho[indice_carta_maquina]

    var indice_carta_jogador = parseInt (Math.random() * 10)
    while (indice_carta_jogador == indice_carta_maquina)
    {
        indice_carta_jogador = parseInt (Math.random() * 10)
    }
    carta_jogador = baralho[indice_carta_jogador]

    document.getElementById("sortear").disabled = true
    document.getElementById("jogar").disabled = false

    exibir_carta_jogador()
}

function exibir_carta_jogador()
{
    var div_carta_jogador = document.getElementById("carta_jogador")
    div_carta_jogador.style.backgroundImage="url(" + carta_jogador.imagem + ")" 
    //div_carta_jogador.style.backgroundImage= `url(${carta_jogador.imagem})`   - a crase é para entrar no css e o $ no js

    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">'
    var tagHTML = "<div id='opcoes' class='carta_status'>"

    var opcoes_texto = ""

    for (var atributo in carta_jogador.atributos)
    {
        opcoes_texto += "<input type='radio' name='atributo' id='atributo' value='" + atributo + "'>" + atributo + " " + carta_jogador.atributos[atributo] + "<br>"
    }

    var nome = `<p class="carta_subtitle">${carta_jogador.nome}</p>`

    div_carta_jogador.innerHTML = moldura + nome + tagHTML + opcoes_texto + "</div>"
}

function obtem_atributo_selec()
{
    var radio_atributos = document.getElementsByName("atributo")

    for(var i = 0; i < radio_atributos.length; i++)
    {
        if (radio_atributos[i].checked == true)
        {
            return radio_atributos[i].value
        }
    }
}

function jogar()
{
    var atributo_selec = obtem_atributo_selec()
    var result = document.getElementById("resultado")
    var valor_carta_jogador = carta_jogador.atributos[atributo_selec]
    var valor_carta_maquina = carta_maquina.atributos[atributo_selec]

    if(valor_carta_jogador > valor_carta_maquina)
    {
        result.innerHTML = "<p class='resultado_final'> Eu não tenho sorte, eu faço minha própria sorte! (você venceu)</p>"
    }
    else if (valor_carta_jogador < valor_carta_maquina)
    {
        result.innerHTML = "<p class='resultado_final'> Eu me recuso a responder com o argumento de que não quero. (você morreu)</p>"
    }
    else
    {
        result.innerHTML = "<p class='resultado_final'> Se você tem uma arma apontando para sua cabeça, você saca uma arma maior! (vingança) </p>"
    }

    document.getElementById("jogar").disabled = true
    exibir_carta_maquina()
    document.getElementById("sortear").disabled = false
}

function exibir_carta_maquina()
{
    var div_carta_maquina = document.getElementById("carta_maquina")
    div_carta_maquina.style.backgroundImage="url(" + carta_maquina.imagem + ")" 
    //div_carta_jogador.style.backgroundImage= `url(${carta_jogador.imagem})`   - a crase é para entrar no css e o $ no js

    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">'
    var tagHTML = "<div id='opcoes' class='carta_status'>"

    var opcoes_texto = ""

    for (var atributo in carta_maquina.atributos)
    {
        opcoes_texto += "<p name='atributo' id='atributo' value='" + atributo + "'>" + atributo + " " + carta_maquina.atributos[atributo] + "<br>"
    }

    var nome = `<p class="carta_subtitle">${carta_maquina.nome}</p>`

    div_carta_maquina.innerHTML = moldura + nome + tagHTML + opcoes_texto + "</div>"
}