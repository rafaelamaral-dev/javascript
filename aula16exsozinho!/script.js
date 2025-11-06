let dado = document.querySelector('#fnum')
let select = document.querySelector('#flista')
let res = document.querySelector('#res')
let valores = []

function adicionar(){
    let n = Number(dado.value)

    if(isNum(n) && !inLista(n)){
        valores.push(n)
        let tabela = document.createElement('option')
        tabela.textContent = `Valor ${n} adicionado!`
        select.appendChild(tabela)
    }else{
        alert('Valor inválido ou já adicionado à lista.')
    }
    
    function isNum(a){
        if(Number.isNaN(a) || a < 1 || a > 100){
            return false
        }else{
            return true
        }
    }

    function inLista(b){
        if(valores.indexOf(b) != -1){
            return true
        }else{
            return false
        }
    }
    dado.value = ''
    dado.focus()
    res.innerHTML = ''
    
}

function finalizar(){
    if(valores.length == 0){
        alert('Adicione valores para finalizar!')
    }else{
        let maior = 0
        let menor = 100
        let soma = 0
        let media = 0
        for(let pos in valores){
            if(valores[pos] > maior){
                maior = valores[pos]
            }
            if(valores[pos] < menor){
                menor = valores[pos]
            }
            soma += valores[pos]
            media = soma/(valores.length)
        }
        
        res.innerHTML = `Ao todo, temos ${valores.length} números cadastrados.`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `A média dos valores informados é ${media}.`
    }
}