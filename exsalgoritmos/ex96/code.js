let res = document.querySelector('#res')

function media(a, b){
    return (a + b)/2
}

function calculo(){
    let primeiro = Number((document.querySelector('#num1').value))
    let segundo = Number((document.querySelector('#num2')).value)
    let resultado = document.createElement('p')
    resultado.textContent = `A média é ${media(primeiro, segundo)}!`
    res.appendChild(resultado)
}