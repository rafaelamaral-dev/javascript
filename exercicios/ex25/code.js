let res = document.getElementById('res')
function clique(){
    let positivo = Number(document.querySelector('#valor').value)
    res.innerHTML=`<p class="destaquejavascript">Contando de 0 até ${positivo}</p>`
    var cont = ``
    for (var cont = 0; cont<=positivo;cont++){
            res.innerHTML += `${cont} \u{1F449}`
    }
    
    res.innerHTML+=`\u{1f3c1}`
}