let num1 = document.querySelector('#fnum1')
let res = document.querySelector('#res')

function dolares(){
    
    let a = +(num1.value)

    // Validações básicas
    if(a == '' || a == '.' || Number.isNaN(a) || a < 0){
        alert('Digite valores válidos para prosseguir.')
        num1.value = ''
        return
    }
    
    //Após validar, mostra-se o resultado ao aluno.
    let cambio = 5
    let dolares = a/cambio
    res.innerHTML = `<p>Você pode comprar US$<strong>${dolares.toFixed(2).replace('.', ',')}</strong>.</p>`
}