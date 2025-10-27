var res = document.getElementById('res')
function clicou(){
    var prim = Number(prompt('Primeiro valor:'))
    var segun = Number(prompt('Segundo valor:'))
    var escolha = Number(prompt(`Valores informados: ${prim} e ${segun}.\n O que vamos fazer? \n [1] Somar \n [2] Subtrair \n [3] Multiplicar \n [4] Dividir`))
    res.innerHTML = `<h2>
            <em>Calculando...</em>
    </h2>`
    switch(escolha){
        case 1:
            var total = prim + segun
            ret.innerHTML += `${prim} + ${segun} = <mark>${total}</mark>`
            break

        case 2:
            var total = prim - segun
            ret.innerHTML += `${prim} - ${segun} = <mark>${total}</mark>`
            break

        case 3:
            var total = prim*segun
            ret.innerHTML += `${prim} x ${segun} = <mark>${total}</mark>`
            break

        case 4:
            var total = prim/segun
            ret.innerHTML += `${prim} / ${segun} = <mark>${total}</mark>`
            break

        default:
            ret.innerHTML += `OPÇÃO INVÁLIDA! Você digitou ${prim} e ${segun}, mas não sei o que fazer com eles.`
            break // o default é necessário aqui para tratar erros (outros valores digitados).
    }
}