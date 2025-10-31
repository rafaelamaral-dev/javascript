// mantenha apenas a seleção do elemento de resultado no escopo global
let res = document.querySelector('p#res')
function clique(){
    // leia os valores DO input (usando .value) no momento do clique
    // usar replace(',', '.') permite aceitar vírgula decimal (opcional)
    let inic = parseFloat(document.getElementById('inicio').value.replace(',','.'))
    let fim = parseFloat(document.getElementById('fim').value.replace(',','.'))
    let passo = parseFloat(document.getElementById('passo').value.replace(',','.'))
    
    res.innerHTML=`<p>Calculando...</p>`

    // validações básicas
    if(Number.isNaN(inic) || Number.isNaN(fim)){
        res.innerHTML=`Por favor, informe valores válidos para início e fim.`
        return
    }

    if(inic==='' || fim===''){
        res.innerHTML=`Por favor, preencha valores válidos nas células vazias.`
        return
    }

    if(Number.isNaN(passo) || passo === 0){
        // passo inválido -> usar 1 como padrão
        // normaliza passo e evita zero ou NaN
        alert('Passo inválido, adotado passo = 1!')
        passo=1
    }

    passo = Math.abs(passo) // trabalhar com passo positivo para controle de loop

    // calcular soma de todos os termos da sequência: i, i+p, i+2p, ... até f
    let soma = 0

    if(inic<fim){
        // sequência crescente
        for(var i = 1; i<=fim; i= +((i+passo).toFixed(12))){
           res.innerHTML+=`${i}...\u{1F449} `
           soma+=i 
        }
    } else {
        // sequência decrescente
        for(var i=fim; i>=inic; i = +((i-passo).toFixed(12))){
            res.innerHTML+=`${i}...\u{1F449} `
            soma+=i
        }
    }
    res.innerHTML += `\u{1f3c1}`
    res.innerHTML+=`<p>Soma = ${soma.toFixed(2)}!</p>`

}

/*

Obs:  

- Por que 12 e não 2?

toFixed(12) arredonda a soma para 12 casas decimais antes de seguir somando, reduzindo o acúmulo de erros de ponto flutuante. Números JS (IEEE‑754) têm ~15–17 dígitos significativos; escolher 12 dá uma folga razoável para evitar ruído sem cortar muita precisão.
toFixed(2) é muito “grosseiro” para muitas somas iterativas (útil p/ valores monetários exibidos, mas pode alterar demais os cálculos e/ou quebrar condições de loop se o passo for < 0.01).

- O operador unário '+' arredonda também?

Não: + apenas converte a string gerada por toFixed(...) em Number. O arredondamento já foi feito por toFixed (na forma de string). Ao converter, o JS cria a melhor aproximação binária desse decimal; portanto você recebe um Number “equivalente” ao decimal arredondado, mas sem zeros à direita na exibição.
Em outras palavras: toFixed faz o arredondamento decimal (string) → + transforma essa string em Number (sem formatação). 

*/