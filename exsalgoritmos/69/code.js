let res = document.querySelector('#res')

function calculo(){
    res.innerHTML = ''
    let numero = +(document.querySelector('#fnum1').value)
    for(let c = 0; c <= 10; c++){
        res.innerHTML += `<p>${numero} x ${c} = ${numero*c}</p>`
    }
}