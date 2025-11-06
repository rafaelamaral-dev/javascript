let num1 = document.querySelector('#fnum1')
let num2 = document.querySelector('#fnum2')
let res = document.querySelector('#res')

function media(){
    
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
    
    //Após validar, mostra-se o resultado ao aluno.
    let media = (a + b)/2
    res.innerHTML = `A média entre ${a} e ${b} é igual a <mark>${media}</mark>.`
}