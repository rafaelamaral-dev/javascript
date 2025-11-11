let res = document.querySelector('#res')

function calculo(){
    let inteiros = []
    let pares = []
    let posições = []
    for(let c = 1; c <= 10; c++){
        inteiros[c] = Number(prompt(`Informe o ${c} número da sequência:`));
        if(inteiros[c] % 2 === 0){
            pares.push(inteiros[c])
            posições.push(c)
        }
    }

    res.innerHTML = `Os números pares digitados foram ${pares}, e as posições foram ${posições}.`
}

