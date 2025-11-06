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
    res.innerHTML = `<p>A distância de <strong>${a}m</strong> corresponde a:</p>`
    res.innerHTML += `<p>${a/1000}Km</p>`
    res.innerHTML += `<p>${a/100}Hm</p>`
    res.innerHTML += `<p>${a/10}Dam</p>`
    res.innerHTML += `<p>${a*10}dm</p>`
    res.innerHTML += `<p>${a*100}cm</p>`
    res.innerHTML += `<p>${a*1000}mm</p>`
}