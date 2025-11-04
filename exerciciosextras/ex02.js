let listaDeFrutas = ['Maçã','Banana','Uva','Pêra']

listaDeFrutas[3]= 'Melão'

console.log(`Minha fruta favorita é: ${listaDeFrutas[3]}.`)

listaDeFrutas.push('Manga')
listaDeFrutas[1]='Abacaxi'

for(let pos in listaDeFrutas){
    console.log(listaDeFrutas[pos])
}