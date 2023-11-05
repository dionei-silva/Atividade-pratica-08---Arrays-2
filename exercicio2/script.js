/* 2. Desenvolva um algoritmo para percorrer um vetor de 20 elementos
inteiros e no final mostre a soma de todos os elementos. */

let vetores1 = [13,19,2,9,1,15,8,9,3,2,18,12,17,19,1,15,12,13,15,18]

let vetor1 = 0
for (let numeroVetor of vetores1) {
    vetor1 = numeroVetor + vetor1
    
}   
document.write(`${vetor1}`)

document.write("<br>")