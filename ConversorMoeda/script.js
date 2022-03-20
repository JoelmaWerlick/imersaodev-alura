function ConverterDolar() {
  var real = parseFloat(document.getElementById("valor").value);
  var valorConvertido = real / 5.05;
  document.getElementById("valorConvertido").innerHTML =
    real + " reais em dólares são = U$" + valorConvertido.toFixed(2);
}

function ConverterEuro() {
  var euro = parseFloat(document.getElementById("valor").value);
  var valorConvertido = euro / 5.52;
  document.getElementById("valorConvertido").innerHTML =
    euro + " reais em euros são = €" + valorConvertido.toFixed(2);
}

function ConverterLibra() {
  var libra = parseFloat(document.getElementById("valor").value);
  var valorConvertido = libra / 6.63;
  document.getElementById("valorConvertido").innerHTML =
    libra + " reais em libras são = £" + valorConvertido.toFixed(2);
}