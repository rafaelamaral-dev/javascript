let num = document.querySelector('#fnum1')
let res = document.querySelector('#res')

function calculo(){
    let a = +(num.value)

    if(a == '' || a == '.' || Number.isNaN(a)){
        alert('Informe um valor válido para prosseguir.')
        num.value = ''
        num.focus()
        return
    }

    for(let c = 1; c <= a; c++ ){
        res.innerHTML += `${c} `
    }
    res.innerHTML += `Acabou!`
}
