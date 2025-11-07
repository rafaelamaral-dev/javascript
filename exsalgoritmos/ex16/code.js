let num1 = document.querySelector('#fnum1')
let num2 = document.querySelector('#fnum2')
let res = document.querySelector('#res')

function calculo(){
    
    let a = +(num1.value)
    let b = +(num2.value)

    // Validações básicas
    if(a == '' || a == '.' || Number.isNaN(a)){
        alert('Digite valores válidos para somar.')
        return
    }

    if(b == '' || b == '.' || Number.isNaN(b)){
        alert('Digite valores válidos para somar.')
        return
    }
    
    //Após validar, mostra-se o resultado ao usuário.
    let totcigar = a*b*365 //Ano considerado com 365 dias.
    let minperd = 10*totcigar
    let diaperd = minperd/(24*60)
    res.innerHTML = `Dias de vida perdidos: <strong>${diaperd.toFixed(2).replace('.',',')}</strong> dias.`
}