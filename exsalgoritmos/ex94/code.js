let res = document.querySelector('#res')

function calculo(){
    let seqnumero = document.querySelector('#num1')
    let termos = Number((seqnumero).value)
    let anterior = 0
    let sequencia = 1
    
    if(Math.floor(termos) <= 0){
        res.innerHTML = `Valor inválido! Digite outro valor.`
        seqnumero.value = ''
        seqnumero.focus()
        return
    }
    if(termos === 1){
        res.innerHTML = `0 >> FIM!`
    }else if(termos === 2){
        res.innerHTML = `0 >> 1 >> FIM!`
    }else{
        res.innerHTML = `${anterior} >> ${sequencia} >> `
    for(let i = 1; i <= (termos - 2); i++){
        let proximo = sequencia + anterior 
        anterior = sequencia
        sequencia = proximo
        res.innerHTML += `${proximo} >> `
    }
        res.innerHTML += `FIM!`
    }
    
}