let notas = [7.5, 8.0, 6.5, 9.0]
let somaNotas = [0]


for(let pos in notas){
    somaNotas[0]+= notas[pos]
}

let media = somaNotas[0]/notas.length
console.log(`A média do aluno é: ${media}!`)
