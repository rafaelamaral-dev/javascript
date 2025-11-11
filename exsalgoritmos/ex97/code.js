let res = document.querySelector('#res')

function maior(a, b, c){
    if(a > b && a > c)
        return a
    if(b > a && b > c)
        return b
    if(c > b && c > a)
        return c
}

function calculo(){
    let primeiro = Number((document.querySelector('#num1').value))
    let segundo = Number((document.querySelector('#num2')).value)
    let terceiro = Number((document.querySelector('#num3')).value)
    let resultado = document.createElement('p')
    resultado.textContent = `O maior número é ${maior(primeiro, segundo, terceiro)}!`
    res.appendChild(resultado)
}