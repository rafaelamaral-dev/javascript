var res = document.getElementById('res')
res.innerHTML = `Já pensei em um valor entre 1 e 100..`
var valor = Math.floor(Math.random() * 100) + 1;

function clicou(){
    var palpite = Number(prompt(`Qual é o seu palpite?`))
    if(palpite > valor){
        res.innerHTML += `<p>Você falou ${palpite}. Meu número é <strong>
            <mark>MENOR</mark>!
        </strong></p>`
    } else if(palpite < valor){
        res.innerHTML += `<p>Você falou ${palpite}. Meu número é <strong>
            <mark>MAIOR</mark>!
        </strong></p>`
    } else {
        res.innerHTML += `<p>
            <strong>
                <mark>PARABÉNS!</mark>
            </strong> Você acertou! Eu tinha sorteado o valor ${palpite}!
        </p>`
    }
}