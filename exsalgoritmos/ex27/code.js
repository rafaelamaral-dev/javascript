let num1 = document.querySelector('#fnum1')
let num2 = document.querySelector('#fnum2')
let res = document.querySelector('#res')

function calculo(){
    
    let nota1 = +(num1.value)
    let nota2 = +(num2.value)
        

    // Validações básicas
    if(nota1 == '' || nota1 == '.' || Number.isNaN(nota1)){
        alert('Digite um valor válido para a Nota 1 para prosseguir.')
        num1.value = ''
        num1.focus()
        return
    }

    if(nota2 == '' || nota2 == '.' || Number.isNaN(nota2)){
        alert('Digite um valor válido para a Nota 2 para prosseguir.')
        num2.value = ''
        num2.focus()
        return
    }

    let media = (nota1 + nota2)/2

    if(media <= 4.9){
        res.innerHTML = `Média = ${media}. Aluno <strong>Reprovado</strong>!`
    } else if(media >= 5 && media <= 6.9){
        res.innerHTML = `Média = ${media}. Aluno está em <mark>Recuperação</mark>!`
        res.innerHTML += `Estude mais \u{1F609}`
    }else{
        res.innerHTML = `Média = ${media}. Aluno está <strong>Aprovado</strong>!`
        res.innerHTML += `É assim que se faz! \u{1F913}`
    }

}
