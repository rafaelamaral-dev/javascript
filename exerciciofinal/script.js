let tabela = []
let option = document.querySelector('')


function adicao(){
    let dado = document.querySelector('#numero').value
    if(dado==='' || dado==='.' || isNaN(dado)){
        alert('Informe valores válidos para adicionar!')
        return
    }else{
        let valido = Number(dado)
         if(tabela.includes(valido)){
            alert(`Valor já adicionado, insira outro valor!`)
            return
        }else{
            tabela = tabela.push(valido)
            let texto = document.createElement('option')
            texto.textContent=`Valor ${valido} adicionado!`

        }
        

       
    }
}