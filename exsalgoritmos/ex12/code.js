let num1 = document.querySelector('#fnum1')
let res = document.querySelector('#res')

function calculo(){
    
    let a = +(num1.value)

    // Validações básicas
    if(a == '' || a == '.' || Number.isNaN(a) || a < 0){
        alert('Digite valores válidos para somar.')
        return
    }
    
    //Após validar, mostra-se o resultado ao aluno.
    let preco = 0.95*a
    res.innerHTML = `<p>O valor do PREÇO PROMOCIONAL, com 5% de desconto, é de: <strong>R$${preco.toFixed(2).replace('.',',')}</strong>.</p>`
}