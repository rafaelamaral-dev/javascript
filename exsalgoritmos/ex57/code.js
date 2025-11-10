let res = document.querySelector('#res')

function calculo(){
    let retorno = true
    let salMulher = 0
    let salHomem = 0
    while(retorno){
        let genero = prompt('Qual é o gênero do funcionário? [M/F]:')
        if(genero.toUpperCase() !== 'M' && genero.toUpperCase() !== 'F'){
            alert('Informe um gênero válido para continuar.')
            return
        } 
        
        if(genero.toUpperCase() === 'M'){
            let novoSalarioh = prompt('Qual é o salário do homem:')
            salHomem += Number(novoSalarioh)
        }
        
        if(genero.toUpperCase() === 'F'){
            let novoSalariom = prompt('Qual é o salário da mulher:')
            salMulher += Number(novoSalariom)
        }

        let continuar = prompt('Você quer continuar? Digite (S) para sim e qualquer coisa para não.')
        if(continuar !== 'S'){
            retorno = false
        }

        res.innerHTML = `Total de salário pago aos homens: ${salHomem}. Total de salário pago às mulheres: ${salMulher}.`
    }
}