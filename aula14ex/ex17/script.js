let tabuada = document.querySelector('#tabuada')

function clique(){
    let valor = document.querySelector('#valor').value

    //validações
    if(valor ==='' || valor==='.' || isNaN(valor)){
        tabuada.innerHTML=`<option>[ERRO] Digite um número válido!</option>`
        return
    }

    tabuada.innerHTML='' //Limpar valores para não acumular.

    let t = Number(valor)
    for(let i=0; i<=10; i++){
        var resultado = `${t*i}`;
        var textoOpcao = `${t} x ${i} = ${resultado}`;

        let novaOpcao = document.createElement('option');
        novaOpcao.textContent= textoOpcao;
        novaOpcao.value= `tab${i}` //Opcional*
        tabuada.appendChild(novaOpcao);
    }
}

/*: Neste exercício o value no option não faz sentido, pois o Javascript não precisa dele. 
Porém, em linguagens como PHP e outras server side essa propriedade é importante.
*/