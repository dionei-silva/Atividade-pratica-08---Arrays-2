/* 3. Desenvolva um algoritmo que preenche um vetor com os 4
primeiros números perfeitos. */

var lista = [];
var contador = 0;
var numero = 1;

while (contador < 4) {
  var soma = 0;
  for (let i = 1; i < numero; i++) {
    if (numero % i == 0) {
      soma = soma + i;
    }
  }
  if (numero == soma) {
    lista.push(numero);
    contador++;
  }
  numero++;
}
document.write(`${lista}, `);


document.write("<br>")