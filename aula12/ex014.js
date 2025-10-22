// Treino de consições múltiplas

//A estrutura do Switch só funciona com valores exatos ou strings, e não aceita intervalos como o if/else if. 

var agora = new Date()
var diaSem = agora.getDay()

/*
    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sábado
*/

console.log(diaSem)

switch(diaSem) {
    case 0:
        console.log('Domingo')
        break // break serve para sair do switch; ele é obrigatório em cada case.
    case 1:
        console.log('Segunda-feira')
        break
    case 2:
        console.log('Terça-feira')
        break
    case 3:
        console.log('Quarta-feira')
        break
    case 4:
        console.log('Quinta-feira')
        break
    case 5:
        console.log('Sexta-feira')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('[ERRO] Dia inválido!')
        break // o default é opcional neste último, mas é bom para tratar erros.
}
