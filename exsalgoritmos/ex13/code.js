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
    let salario = a*1.15
    res.innerHTML = `O valor do salário, com 15% de aumento, é de <strong>R$${salario.toLocaleString('pt-BR')}</strong>.`
}