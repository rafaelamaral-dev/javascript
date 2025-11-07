let txt1 = document.querySelector('#ftxt1')
let txt2 = document.querySelector('#ftxt2')
let numero = document.querySelector('#fnum1')
let res = document.querySelector('#res')

function calculo(){
    
    let nome = txt1.value
    let genero = (txt2.value.toUpperCase())
    let valor = +(numero.value)

    // Validações básicas
    if(nome == '' || nome == '.'){
        alert('Digite um nome para prosseguir.')
        return
    }

    if(genero == '' || genero == '.'){
        alert('Digite um gênero para prosseguir.')
        return
    }

    if(genero != 'F' && genero != 'M'){
        alert('Escolha um gênero válido para prosseguir')
        return
    }
    
    if(valor == '' || valor == '.' || Number.isNaN(valor)){
        alert('Digite um valor de compra válido para prosseguir.')
        return
        //Após as validações temos os possíveis retornos ao usuário abaixo.
    }else if(genero == 'F'){
        res.innerHTML = `A cliente ${nome} tem direito a um desconto de <strong>R$${(valor*0.13).toFixed(2).replace('.',',')}</strong> e vai pagar o valor promocional de <strong>R$${(valor*0.87).toFixed(2).replace('.',',')}</strong>.`
    }else{
        res.innerHTML = `O cliente ${nome} tem direito a um desconto de <strong>R$${(valor*0.05).toFixed(2).replace('.',',')}</strong> e vai pagar o valor promocional de <strong>R$${(valor*0.95).toFixed(2).replace('.',',')}</strong>.`
    }

}
