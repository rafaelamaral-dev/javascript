let num1 = document.querySelector('#fnum1')
let res = document.querySelector('#res')

function calculo(){
    
    let chute = +(num1.value)    

    // Validações básicas
    
    if(chute == '' || chute == '.' || Number.isNaN(chute)){
        alert('Digite um valor válido para prosseguir.')
        num1.value = ''
        num1.focus()
        return
    }

    if(chute < 1 || chute > 5){
        alert('Digite um valor dentro do intervalo 1 a 5 para prosseguir.')
        num1.value = ''
        num1.focus()
        return
    }

    function getRandomIntInclusive(min, max){
        min = Math.ceil(min); // Garante que o mínimo seja um inteiro
        max = Math.floor(max); // Garante que o máximo seja um inteiro
        // A lógica central é: Math.floor(Math.random() * (max - min + 1)) + min
        return Math.floor(Math.random()*(max - min + 1)) + min;
    } 

    let sorteio = getRandomIntInclusive(1, 5)

    if(sorteio === chute){
        res.innerHTML = `<strong>Parabéns!</strong> Você apostou em ${chute} e eu sorteei o ${sorteio}!`
    }else{
        res.innerHTML = `<strong>Não foi dessa vez!</strong> Você apostou em ${chute} e eu sorteei o número ${sorteio}.`
    }

}
