let num1 = document.querySelector('#fnum1')
let res = document.querySelector('#res')

function calculo(){
    
    let a = +(num1.value)

    // Validações básicas
    if(a == '' || a == '.' || Number.isNaN(a)){
        alert('Digite valores válidos para somar.')
        return
    }

    if(a > 80){
        res.innerHTML = `<p>Velocidade ${a}Km/h maior que a velocidade permitida de <mark>80Km/h</mark>. Você foi <strong>MULTADO</strong>!</p>`
        let multa = (Math.floor(a-80))*5
        res.innerHTML += `<p>Multa de: <strong>R$${multa.toFixed(2).replace('.',',')}</strong>.</p>`
    } else {
        res.innerHTML = `<p>Velocidade ${a}Km/h menor que a velocidade permitida de <mark>80Km/h</mark>. Você não foi multado, tudo certo \u{1F44D} 👍</p>` 
        /*Para sistemas antigos o unicode garante compatilidade. Mas os sistemas modernos que suportam UTF - 8 aceitam o emoji diretamente.*/
    }
}