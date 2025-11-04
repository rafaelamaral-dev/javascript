let dado = document.querySelector('#numero').value
let botao2 = document.querySelector('#finalizar')

let pos = 0

    function adicao(){
        if(dado ==='' || dado ==='.' || NaN(dado)){
            alert('Adicione valores antes de finalizar!')
        } else{
            let vet[`${pos}`] = +dado
            pos++
            }
        return
    }

    function somar(){
        alert(`Índice atual: ${pos}! E valor digitalizado: ${dado}!`)
    }