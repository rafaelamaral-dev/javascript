var res = document.getElementById('res')

function clicou() {
    var valor = Math.floor(Math.random() * 100) + 1;
    res.innerHTML +=`<p>Acabei de pensar no número <mark>${valor}</mark>!</p>`
}

function limpar() {
    res.innerHTML = null
}