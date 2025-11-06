let num1 = document.querySelector('#fnum1')
let res = document.querySelector('#res')

function multiplo(){
    
    let a = +(num1.value)

    // Validações básicas
    if(a == '' || a == '.' || Number.isNaN(a)){
        alert('Digite valores válidos para prosseguir.')
        num1.value = ''
        return
    }
    
    //Após validar, mostra-se o resultado ao aluno.
    let dobro = a*2
    let terco = a/3
    res.innerHTML = `<p>O dobro de ${a} é <strong>${dobro}</strong>.</p>`
    res.innerHTML += `<p>A terça parte de ${a} é <strong>${terco}</strong>.</p>`
}