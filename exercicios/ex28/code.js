let res = document.getElementById('res');

function clique(){
    // 1. Pega a string de valor diretamente do input
    let valorString = document.querySelector('#valor').value;
    
    // 2. Verifica se a string está vazia antes de converter
    if(valorString === ''){ // Use '' para string vazia
        res.innerHTML = `[ERRO!] Digite um número válido!`;
        return
        
    } else {
        // 3. Se não estiver vazia, então converte para número
        let inicial = Number(valorString);
        
        // 4. (Opcional, mas recomendado) Trata casos como "e" ou "." sozinhos
        // Se o input for "number", o browser já ajuda, mas se o usuário 
        // burlar ou para maior segurança, você pode verificar se é NaN.
        if (isNaN(inicial) || inicial<1 || inicial >21) {
            res.innerHTML = `[ERRO!] O valor não é um número válido!`;
            return
        } else {
            // Lógica de sucesso aqui
            res.innerHTML = `<p class="destaquejavascript">Calculando fatorial de ${inicial}!</p>`
            var cont = 0
            var fatorial = 1
            for(cont=inicial;cont>1;cont+=-1){
                res.innerHTML +=`${cont}`
                res.innerHTML+=` x `
                fatorial=fatorial*cont
            }
            res.innerHTML+=` 1 = <strong>${fatorial.toLocaleString('pt-br')}</strong>` //toLocaleString usado para adicionar ponto entre as casas de milhar.
        }
    }
}