let res = document.querySelector('#res')

function calculo(){
    let primeiro = +(document.querySelector('#fnum1').value)
    let razao = +(document.querySelector('#fnum2').value)
    res.innerHTML = ''

    for(let i = 1; i <= 10; i++){
        res.innerHTML += `<p>${primeiro+((i - 1)*razao)}</p>`
    }

}