let res = document.querySelector('#res')
let peso = []
let altura = []

function calculo(){
    for(let c = 1; c <= 7; c++){
        let novoPeso = prompt(`Informe o peso para a ${c}ª pessoa:`)
        let pesoNumerico = +(novoPeso)
        peso.push(pesoNumerico)
        let novaAltura = prompt(`Informe a altura para a ${c}ª pessoa:`)
        let alturaNumerica = parseFloat(novaAltura)
        altura.push(alturaNumerica)

        res.innerHTML = `Valores digitados de peso: ${peso}. <p>Valores digitados de altura: ${altura}.</p>`
    }

    let somaAltura = 0
    let mediaAltura = 0
    for(let pos in altura){
        somaAltura += altura[pos]
    }

    mediaAltura = somaAltura/peso.length
    res.innerHTML += `Média de altura: <strong>${mediaAltura.toFixed(2)}m</strong>.`

    let tot90 = 0
    for(let pos in peso){
        if(peso[pos] > 90){
            tot90 += 1
        }
    }
    res.innerHTML += `<p><strong>${tot90}</strong> pessoas pesam mais de 90kg!</p>`

    let baixoEmagro = 0
    for(let pos in peso){
        if(peso[pos] < 50){
            if(altura[pos] < 1.60){
                baixoEmagro += 1
            }
        }
    }
    res.innerHTML += `<p><strong>${baixoEmagro}</strong> pessoas pesam menos de 50kg e têm menos de 1,60m.</p>`

    let altoEpesado = 0
    for(let pos in altura){
        if(altura[pos] > 1.90){
            if(peso[pos] > 100){
                altoEpesado += 1
            }
        }
    }
    res.innerHTML += `<p><strong>${altoEpesado}</strong> pessoas têm mais de 1,90m e possuem mais de 100kg!</p>`
    
}
