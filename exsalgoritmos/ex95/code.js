let res = document.querySelector('#res')

function soma(a, b){
    return a + b
}

function calculo(){
    let primeiro = Number((document.querySelector('#num1').value))
    let segundo = Number((document.querySelector('#num2')).value)
    let resultado = document.createElement('p')
    resultado.textContent = `A soma é ${soma(primeiro, segundo)}!`
    res.appendChild(resultado)
}