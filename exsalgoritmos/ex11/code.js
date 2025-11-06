let num1 = document.querySelector('#fnum1')
let num2 = document.querySelector('#fnum2')
let num3 = document.querySelector('#fnum3')
let res = document.querySelector('#res')

function calculo(){
    
    let a = +(num1.value)
    let b = +(num2.value)
    let c = +(num3.value)

    // Validações básicas
    if(a == '' || a == '.' || Number.isNaN(a)){
        alert('Digite valores válidos para somar.')
        return
    }

    if(b == '' || b == '.' || Number.isNaN(b)){
        alert('Digite valores válidos para somar.')
        return
    }

    if(c == '' || c == '.' || Number.isNaN(b)){
        alert('Digite valores válidos para somar.')
        return
    }
    
    //Após validar, mostra-se o resultado ao aluno.
    let delta = b**2 - 4*a*c
    res.innerHTML = `O valor de \u0394 (Delta) é: ${delta}.`
}