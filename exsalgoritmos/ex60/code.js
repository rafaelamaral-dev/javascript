let res = document.querySelector('#res')

function calculo(){
    let continuar = true
    let idadePessoaMaisvelha = 0
    let nomePessoaMvelha = ''
    let nomeMulherMjovem = ''
    let idadeMulherMjovem = 120
    let media = 0
    let c = 0
    let soma = 0
    let hmais30 = 0
    let mmenos18 = 0
    while(continuar){    
        let nome = prompt(`Digite um nome:`)

        let idade = prompt(`Informe a idade:`)
            if(Number(idade) > idadePessoaMaisvelha){
                idadePessoaMaisvelha = idade
                nomePessoaMvelha = nome
            }
            soma += Number(idade)
            c += 1
            media = soma/c

    
        let genero = prompt(`Informe o gênero da pessoa [M/F]:`)
            if(genero.toUpperCase() === 'F'){
                if(idadeMulherMjovem > Number(idade)){
                    idadeMulherMjovem = Number(idade)
                    nomeMulherMjovem = nome
                    if(idadeMulherMjovem < 18){
                        mmenos18 += 1
                    }
                }
            }else{
                if(Number(idade) > 30){
                    hmais30 += 1
                }
            }


    
        let escolha = prompt('Deseja continuar? [S/N]')
        if(escolha.toUpperCase() !== 'S'){
            continuar = false
            res.innerHTML = `<p>O nome da pessoa mais velha é: <strong>${nomePessoaMvelha}</strong>.</p>`
            res.innerHTML += `<p>O nome da mulher mais jovem é: <strong>${nomeMulherMjovem}</strong>.</p>`
            res.innerHTML += `<p>A média de idade do grupo é: <strong>${media}</strong> anos.</p>`
            res.innerHTML += `<p><strong>${hmais30}</strong> homens têm mais de 30 anos.</p>`
            res.innerHTML += `<p><strong>${mmenos18}</strong> mulheres têm menos de 18 anos.</p>`
        }
        
    }
}