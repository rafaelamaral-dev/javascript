let res = document.querySelector('#res')
let nomes = []

function calculo(){
    for(let i = 1; i <= 7; i++){
        let name = prompt(`Informe o ${i}º nome:`)
        nomes[i] = name
    }

    res.innerHTML = `<p>Estes são os nomes guardados no vetor, em ordem inversa:</p>`

    for(let c = 7; c >= 1; c--){
        res.innerHTML += `${nomes[c]}, `
    }
}