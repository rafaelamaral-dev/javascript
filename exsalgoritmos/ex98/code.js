let res = document.querySelector('#res')

function SuperSomador(a, b){
    let soma = 0
    if(a < b){
        for(let c = a; c <= b; c++){
            soma += c
       }
       return soma
    } 
    
    if(b < a){
        for(let c = b; c <= a; c++){
            soma += c
       }
       return soma
    }
}

function calculo(){
    let primeiro = Number((document.querySelector('#num1').value))
    let segundo = Number((document.querySelector('#num2')).value)
    let resultado = document.createElement('p')
    resultado.textContent = `A soma do intervalo é: ${SuperSomador(primeiro, segundo)}!`
    res.appendChild(resultado)
}