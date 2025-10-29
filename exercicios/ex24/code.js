let res = document.getElementById('res')
function clique(){
    res.innerHTML=`<p class="destaquejavascript">Contagem Regressiva de 10 a 1</p>`
    var cont = ``
    for (var cont = 10; cont>=1;cont+=-1){
        res.innerHTML+=`${cont} \u{1F449} `
    }
    res.innerHTML+=`\u{1f3c1}`
}