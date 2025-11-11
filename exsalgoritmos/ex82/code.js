let res = document.querySelector('#res')

function calculo(){
    let notas = []
    let soma = 0
    let media = 0
    let acimamedia = 0
    let maior = 0
    let posicaomaior = []
    
    for(let c = 0; c <= 9; c++){
        let numero = Number(prompt(`Informe a ${c + 1}ª nota:`))
        notas.push(numero)
        soma += numero
        media = soma/notas.length
        if(notas[c] >= maior){
            maior = notas[c]
        }

    }

    for(let c = 0; c <= 9; c++){
        if(notas[c] > media){
            acimamedia += 1
        }
        if(notas[c] >= maior){
            posicaomaior.push(c)
        }
    }

    
    res.innerHTML = `<p>Você digitou ${notas.length} notas. As notas são ${notas}.</p>`
    res.innerHTML += `<p>A média da turma é ${media.toFixed(2)}.</p>`
    res.innerHTML += `<p>${acimamedia} alunos estão acima da média.</p>`
    res.innerHTML += `<p>A maior nota digitada foi ${maior}.</p>`
    res.innerHTML += `<p>A maior nota aparece nas posições ${posicaomaior}.</p>`
    
}

