/* 4. Desenvolva um algoritmo que declare uma lista de 10 números e
solicite um número para o usuário e no final informe se o número
que o usuário digitou está dentro da lista ou não. */

let numeros = [1,2,3,4,5,6,7,8,9,10]
let numeroPedido = Number(prompt('Insira seu numero'))
let encontrado = false

for(let numero4 of numeros){
    if(numero4 === numeroPedido){
        encontrado = true
        break
    }
}
if (encontrado) {
    document.write("O número está na lista");
  } else {
    document.write("O número não está na lista");
  }

document.write("<br>")