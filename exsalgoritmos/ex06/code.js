let num1 = document.querySelector('#fnum1')
let res = document.querySelector('#res')

function sucessor(){
    
    let a = +(num1.value)

    // Validações básicas
    if(a == '' || a == '.' || Number.isNaN(a)){
        alert('Digite valores válidos para somar.')
        return
    }
    
    //Após validar, mostra-se o resultado ao aluno.
    let sucessor = a + 1
    let antecessor = a - 1
    res.innerHTML = `O antecessor de <strong>${a}</strong> é <strong>${antecessor}</strong> e o sucessor é <strong>${sucessor}</strong>.`
}