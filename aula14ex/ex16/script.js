// mantenha apenas a seleção do elemento de resultado no escopo global
var res = document.querySelector('#res')

function clique(){
    // leia os valores DO input (usando .value) no momento do clique
    // usar replace(',', '.') permite aceitar vírgula decimal (opcional)
    const i = parseFloat(document.getElementById('inicio').value.replace(',', '.'))
    const f = parseFloat(document.getElementById('fim').value.replace(',', '.'))
    let p = parseFloat(document.getElementById('passo').value.replace(',', '.'))

    res.innerHTML = `<p>Calculando...</p>`

    // validações básicas
    if (Number.isNaN(i) || Number.isNaN(f)) {
        res.innerHTML = 'Por favor, informe valores válidos para início e fim.'
        return
    }
    if (Number.isNaN(p) || p === 0) {
        // passo inválido -> usar 1 como padrão
        // normaliza passo e evita zero ou NaN
        alert('Passo inválido, adotado passo = 1!')
        p = 1
    }

    p = Math.abs(p) // trabalhar com passo positivo para controle de loop

    // calcular soma de todos os termos da sequência: i, i+p, i+2p, ... até f
    let soma = 0
    if (i <= f) {
        // sequência crescente
        for (let val = i; val <= f; val = +((val + p).toFixed(12))) {
            res.innerHTML += `${val}...\u{1F449} `
            soma += val
        }
    } else {
        // sequência decrescente
        for (let val = i; val >= f; val = +((val - p).toFixed(12))) {
            res.innerHTML += `${val}...\u{1F449} `
            soma += val
        }
    }
    res.innerHTML += `\u{1f3c1}`
    res.innerHTML += `<p>Soma = ${soma}!</p>`
}
