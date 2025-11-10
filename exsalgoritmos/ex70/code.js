let res = document.querySelector('#res')

function calculo(){
    let anterior = 0
    let sequencia = 1
    res.innerHTML = `${anterior}, ${sequencia}, `
    for(let i = 1; i <= 8; i++){
        let proximo = sequencia + anterior 
        anterior = sequencia
        sequencia = proximo
        res.innerHTML += `${proximo}, `

    }
}