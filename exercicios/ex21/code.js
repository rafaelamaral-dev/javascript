let res = document.getElementById('res')
function clique(){
    res.innerHTML=`<p class="destaquejavascript">Contando de 1 até 10</p>`
    var cont = ``
    for (var cont = 1; cont<=10;cont++){
        res.innerHTML+=`${cont} \u{1F449} `
    }
    res.innerHTML+=`\u{1f3c1}`
}