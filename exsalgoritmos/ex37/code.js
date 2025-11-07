let num1 = document.querySelector('#fnum1')
let txt1 = document.querySelector('#ftxt1')
let num2 = document.querySelector('#fnum2')
let res = document.querySelector('#res')

function calculo(){
    
    let anos = +(num1.value)
    let genero = (txt1.value.toUpperCase())
    let salario = +(num2.value)

    // Validações básicas
    if(anos == '' || anos == '.' || Number.isNaN(anos)){
        alert('Digite um ano válido para prosseguir.')
        num1.value = ''
        num1.focus()
        return
    }

    if(genero == '' || genero == '.'){
        alert('Digite um gênero para prosseguir.')
        genero.value = ''
        txt1.focus()
        return
    }

    if(genero != 'F' && genero != 'M'){
        alert('Escolha um gênero válido para prosseguir')
        genero.value = ''
        txt1.focus()
        return
    }
    
    if(salario == '' || salario == '.' || Number.isNaN(salario)){
        alert('Digite um valor de salário válido para prosseguir.')
        salario.value = ''
        num2.focus()
        return
    }
    //Após as validações temos os possíveis retornos ao usuário abaixo.

    if(genero == 'F'){
        if(anos < 15){
            res.innerHTML = `A funcionária receberá um aumento de 5%. Novo salário: <strong>R$${(salario*1.05).toFixed(2).replace('.',',')}</strong>`
        } else if(anos >= 15 && anos <= 20){
            res.innerHTML = `A funcionária receberá um aumento de 12%. Novo salário: <strong>R$${(salario*1.12).toFixed(2).replace('.',',')}</strong>`
        }else{
            res.innerHTML = `A funcionária receberá um aumento de 23%. Novo salário: <strong>R$${(salario*1.23).toFixed(2).replace('.',',')}</strong>`
        }
    }else{
        if(anos < 20){
            res.innerHTML = `O funcionário receberá um aumento de 3%. Novo salário: <strong>R$${(salario*1.03).toFixed(2).replace('.',',')}</strong>`
        } else if(anos >= 20 && anos <= 30){
            res.innerHTML = `O funcionário receberá um aumento de 13%. Novo salário: <strong>R$${(salario*1.13).toFixed(2).replace('.',',')}</strong>`
        }else{
            res.innerHTML = `O funcionário receberá um aumento de 25%. Novo salário: <strong>R$${(salario*1.25).toFixed(2).replace('.',',')}</strong>`
        }
    }
}
