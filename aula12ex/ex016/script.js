let tabuada = document.querySelector('select#tabuada')

function clique(){

    let valor = document.querySelector('input#valor').value

    if(valor==='' || valor==='.' || isNaN(valor)){
        tabuada.innerHTML='<option>[ERRO] Digite um número válido!</option>'
        return
    }

    //Limpa o SELECT antigo (para que a nova tabuada não se acumule)
    tabuada.innerHTML=''
    
        let t= +(valor)
        for(var i = 0; i<=10; i++){
            let resultado = `${t*i}`;
            let textoOpcao = `${t} x ${i} = ${resultado}`;
            //A. Criar elemento <option>
            let novaOpcao = document.createElement('option');

            //B. Define o texto que o usuário verá
            novaOpcao.textContent= textoOpcao;
            
            //C. (Opcional) Define o 'value' (o valor que seria enviado em um formulário)
            novaOpcao.value= resultado;

            //D. Adiciona o <option> dentro do <select>
            tabuada.appendChild(novaOpcao);
        }
    
    // Opcional: Chama a função uma vez ao carregar a página para mostrar a tabuada padrão
    // clique();

}