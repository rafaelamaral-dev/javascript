let num1 = document.querySelector('#fnum1')
let num2 = document.querySelector('#fnum2')
let res = document.querySelector('#res')

function calculo(){
    
    let a = +(num1.value)
    let b = +(num2.value)

    // Validações básicas
    if(a == '' || a == '.' || Number.isNaN(a) || a < 0){
        alert('Digite valores válidos para somar.')
        return
    }

    if(b == '' || b == '.' || Number.isNaN(b) || b < 0){
        alert('Digite valores válidos para somar.')
        return
    }
    
    //Após validar, mostra-se o resultado ao aluno.
    let area = a*b
    let volume = area/2
    res.innerHTML = `A parede tem uma área de <strong>${area}m²</strong>. É necessário um volume de <strong>${volume} litros</strong> de tinta para a pintura total.`
}