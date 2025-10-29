let res = document.getElementById('res')
function clique(){
    let inicial = Number(document.querySelector('#primeiro').value)
    let final = Number(document.querySelector('#segundo').value)
    res.innerHTML=`<p class="destaquejavascript">Contando de ${inicial} até ${final}</p>`
    if(inicial<=final){
        for (var cont = inicial; cont<=final;cont++){
            res.innerHTML += `${cont} \u{1F449}`
    }
    } if(inicial>final){
        for (var cont = inicial; cont>=final;cont+=-1){
            res.innerHTML += `${cont} \u{1F449}`
    }
    }
    res.innerHTML+=`\u{1f3c1}`
}