var res = document.getElementById('res')

function somar(){
    let primeiro = parseFloat(document.getElementById('numero1').value.trim())
    let segundo = parseFloat(document.getElementById('numero2').value.trim())
    res.innerHTML= `1º número = ${primeiro} e 2º número = ${segundo}!`

    if(Number.isNaN(primeiro) || Number.isNaN(segundo)){
        res.innerHTML=`[ERRO!] Por favor digite um número!`
        return
    }

    let soma = primeiro + segundo
    res.innerHTML= `Soma dos números: <strong>${soma}</strong>!`
}