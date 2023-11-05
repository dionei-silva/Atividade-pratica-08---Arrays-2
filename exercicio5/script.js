/* 5. Escreva um algoritmo que solicite ao usuário a entrada de 5 nomes,
e que exiba a lista desses nomes na tela. Após exibir essa lista, o
programa deve mostrar também os nomes na ordem inversa em
que o usuário os digitou.

Ex:
Entrada: Édson, Marcelo, Letícia, Ju, Thobias
Saída: Thobias, Ju, Letícia, Marcelo, Édson */

let usuarios = []

for(let usuario = 0; usuario <=  4; usuario++){
    let nome = prompt('insira cinco nomes')
    usuarios.push(nome)
}
document.write(`Normal ${usuarios} , `)
let usuariosInvertidos = usuarios.reverse()
document.write(`Invertido ${usuariosInvertidos} , `)

document.write("<br>")