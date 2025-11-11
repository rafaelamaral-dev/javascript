let res = document.querySelector('#res')

function media(a, b){
    return (a + b)/2
}

function situacao(n, m){
    if(media(n, m) >= 7){
        return 'Aluno APROVADO!'
    }
    if(media(n, m) < 7 && media(n, m) >= 5){
        return 'Aluno EM RECUPERAÇÃO!'
    }
    else {
        return 'Aluno REPROVADO!'
    }
}

function calculo(){
    let primeiro = Number((document.querySelector('#num1').value))
    let segundo = Number((document.querySelector('#num2')).value)
    let resultado = document.createElement('p')
    resultado.textContent = `A média do aluno é: ${media(primeiro, segundo)}! Situação do aluno: ${situacao(primeiro, segundo)}`
    res.appendChild(resultado)
}