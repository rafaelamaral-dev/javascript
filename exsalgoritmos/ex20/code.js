let num1 = document.querySelector('#fnum1')
let res = document.querySelector('#res')

function calculo(){
    
    let a = +(num1.value)

    // Validações básicas
    if(a == '' || a == '.' || Number.isNaN(a)){
        alert('Digite valores válidos para somar.')
        return
    }

    if(a % 2 == 0){
        res.innerHTML = `O valor <strong>${a}</strong> é <strong>PAR</strong>!`
    } else {
        res.innerHTML = `O valor <strong>${a}</strong> é <strong>ÍMPAR</strong>!`
    }
}