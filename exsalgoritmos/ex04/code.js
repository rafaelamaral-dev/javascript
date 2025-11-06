let num1 = document.querySelector('#fnum1')
let num2 = document.querySelector('#fnum2')
let res = document.querySelector('#res')

function somar(){
    
    let a = +(num1.value)
    let b = +(num2.value)
    if(a == '' || a == '.' || Number.isNaN(a)){
        alert('Digite valores válidos para somar.')
        return
    }

    if(b == '' || b == '.' || Number.isNaN(b)){
        alert('Digite valores válidos para somar.')
        return
    }
    
    let soma = a + b
    res.innerHTML = `A soma entre ${a} e ${b} é igual a <mark>${soma}</mark>.`
}