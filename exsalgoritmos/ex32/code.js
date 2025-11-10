let res = document.querySelector('#res')

function calculo(){

    for(let c = 1; c <= 4 ; c++){
        let chute = prompt(`Escolha um número inteiro entre 1 e 10`)
        let chuteNumerico = +(chute)    

    // Validações básicas
    
    if(chuteNumerico == '' || chuteNumerico == '.' || Number.isNaN(chuteNumerico)){
        alert('Digite um valor válido para prosseguir.')
        return
    }

    if(chuteNumerico < 1 || chuteNumerico > 10){
        alert('Digite um valor dentro do intervalo 1 a 10 para prosseguir.')
        return
    }

    function getRandomIntInclusive(min, max){
        min = Math.ceil(min); // Garante que o mínimo seja um inteiro
        max = Math.floor(max); // Garante que o máximo seja um inteiro
        // A lógica central é: Math.floor(Math.random() * (max - min + 1)) + min
        return Math.floor(Math.random()*(max - min + 1)) + min;
    } 

    let sorteio = getRandomIntInclusive(1, 10)
        if(sorteio === chuteNumerico){
        alert(`Parabéns! Você apostou em ${chuteNumerico} e eu sorteei o ${sorteio}!`)
        return
    }else{
        alert(`Não foi dessa vez! Você apostou em ${chuteNumerico} e eu sorteei o número ${sorteio}. Você tem mais ${4-c} tentativas!`)
    }
    }
    

}
