1/* . Desenvolva um algoritmo para percorrer um vetor de 15 elementos
inteiros já preenchido e imprima todos os valores pares. */

let vetores = [5,1,5,1,7,8,2,15,13,6,20,14,9,10,16]

for (const vetor of vetores) {
    if(vetor % 2 === 0)
    document.write(` ${vetor},`)
}
document.write("<br>")

