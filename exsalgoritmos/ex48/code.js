let num = document.querySelector('#fnum1')
let res = document.querySelector('#res')
let valores = []

function calculo(){
    let soma = 0

    for(let c = 1; c <= 7; c++){
    let valorDigitado = prompt(`Digite o valor para a posição ${c} do array:`);
    let valorNumerico = parseInt(valorDigitado);
    valores.push(valorNumerico);
    soma += valorNumerico;
    }
    res.innerHTML = `Você digitou os valores ${valores}, e a soma deles é <p><strong>${soma}!</strong></p>`
}


