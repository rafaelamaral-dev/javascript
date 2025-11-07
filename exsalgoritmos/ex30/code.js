let num1 = document.querySelector('#fnum1')
let num2 = document.querySelector('#fnum2')
let num3 = document.querySelector('#fnum3')
let res = document.querySelector('#res')

function calculo(){
    
    let seg1 = +(num1.value)
    let seg2 = +(num2.value)
    let seg3 = +(num3.value)    

    // Validações básicas
    if(seg1 == '' || seg1 == '.' || Number.isNaN(seg3)){
        alert('Digite um valor válido do primeiro segmento para prosseguir.')
        num1.value = ''
        num1.focus()
        return
    }

    if(seg2 == '' || seg2 == '.' || Number.isNaN(seg2)){
        alert('Digite um valor válido do segundo segmento para prosseguir.')
        num2.value = ''
        num2.focus()
        return
    }

    if(seg3 == '' || seg3 == '.' || Number.isNaN(seg3)){
        alert('Digite um valor válido do terceiro segmento para prosseguir.')
        num3.value = ''
        num3.focus()
        return
    }

    if(seg1 >= (seg2 + seg3) || seg2 >= (seg1 + seg3) || seg3 >= (seg1 + seg2)){
        res.innerHTML = `Os segmentos de reta informados (${seg1}, ${seg2} e ${seg3}) <strong>NÃO</strong> podem formar um triângulo!`
    }else{
        res.innerHTML = `<p>Os segmentos de reta informados (${seg1}, ${seg2} e ${seg3}) <strong>PODEM</strong> formar um triângulo!</p>`
        if(seg1 != seg2 && seg1 != seg3 && seg2 != seg3){
            res.innerHTML += `<p>Adicionalmente, este é um triângulo <mark>ESCALENO</mark>! (Todos os seus lados são diferentes \u{1F600})</p>`
        } else if(seg1 == seg2 && seg1 == seg3){
            res.innerHTML += `<p>Adicionalmente, este é um triângulo <mark>EQUILÁTERO</mark>! (Ele possui todos os lados iguais \u{1F600})</p>`
        }else {
            res.innerHTML += `<p>Adicionalmente, este é um triângulo <mark>ISÓSCELES</mark>! (Ele possui 2 lados iguais \u{1F600})</p>`
        }
    }

}
