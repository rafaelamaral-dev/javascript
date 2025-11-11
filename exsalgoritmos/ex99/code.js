let res = document.querySelector('#res')

function Potencia(a, b){
    let potencia = a**b
    return potencia
}

function calculo(){
    let primeiro = Number((document.querySelector('#num1').value))
    let segundo = Number((document.querySelector('#num2')).value)
    let resultado = document.createElement('p')
    resultado.textContent = `O resultado da potência é: ${Potencia(primeiro, segundo)}!`
    res.appendChild(resultado)
}