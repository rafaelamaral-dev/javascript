let num = [5,8,2,9,3] //Declaração de Array (vetor)

num.push(1) //Declaração de valor na última posição do array.

num[5]=6 //Acrescenta um valor em uma posição do array (valor '6' na posição índice 5. A primeira posição tem índice 0.)

num.sort() //Ordena os valores em forma crescente.

console.log(`Nosso vetor é o ${num}`)


console.log(`O vetor tem ${num.length} posições.`) //Comprimento da variável (quantas posições ela tem). 'length' não tem parênteses porque é um atributo, não um parâmetro.

console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(9) //Parâmetro indexOf() retorna a posição do valor solicitado. Javascript retorna -1 se o valor não existe no vetor.
if(pos == -1){
    console.log(`O valor não foi encontrado!`)
}else{
    console.log(`O valor está na posição ${pos}`)
}

