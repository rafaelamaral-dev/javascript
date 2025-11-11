let res = document.querySelector('#res')

function calculo(){
    let meuarray = []
    function getRandomIntInclusive(min, max){
        min = Math.ceil(min); // Garante que o mínimo seja um inteiro
        max = Math.floor(max); // Garante que o máximo seja um inteiro
        // A lógica central é: Math.floor(Math.random() * (max - min + 1)) + min
        return Math.floor(Math.random()*(max - min + 1)) + min;
    }

    for(let i = 0; i <= 19; i++){
        meuarray[i] = getRandomIntInclusive(0, 99)
    }
    res.innerHTML = `<p>O vetor com números sorteados é o ${meuarray}.</p>`
    res.innerHTML += `<p>O vetor com valores ordenados é o ${meuarray.sort((a, b) => a - b)}.</p>`
    res.innerHTML += `O vetor tem <strong>${meuarray.length}</strong> posições!`
    

    
}

