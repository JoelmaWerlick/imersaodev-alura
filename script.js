function Result() {
 
  var valorNota1 = document.getElementById("nota1");
  var nota1 = valorNota1.value;
  var nota1Numerico = parseFloat(nota1);
 
  var valorNota2 = document.getElementById("nota2");
  var nota2 = valorNota2.value;
  var nota2Numerico = parseFloat(nota2);
  
  var valorNota3 = document.getElementById("nota3");
  var nota3 = valorNota3.value;
  var nota3Numerico = parseFloat(nota3);
  
  var valorNota4 = document.getElementById("nota4");
  var nota4 = valorNota4.value;
  var nota4Numerico = parseFloat(nota4);

  var soma =
    (nota1Numerico + nota2Numerico + nota3Numerico + nota4Numerico) / 4;

  if (soma >= 7) {
    var resultado = document.getElementById("Resultado");
    var final =
      "Parabéns, você foi aprovado com uma média final de: " +
      soma.toFixed(2);
    resultado.innerHTML = final;
  } else {
    var resultado = document.getElementById("Resultado");
    var final =
      "Infelizmente, você reprovou sua média final foi de: " +
      soma.toFixed(2);
    resultado.innerHTML = final;
  }
}