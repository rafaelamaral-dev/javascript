let res = document.querySelector('#res')

function gerador(){
    let mensagem = (document.querySelector('#txt1')).value
    let numero = document.querySelector('#num1')
    let n = numero.value
    let borda = Number((document.querySelector('#num2')).value)
    let textborda = ''
    switch(borda){
        case 1:
            textborda = '+-------======-------+';
            break;
        case 2:
            textborda = '~~~~~~~~:::::::~~~~~~~';
            break;
        case 3:
            textborda = '<<<<<<<<------->>>>>>>';
            break;
        default:
            textborda = 'Escolha inválida';
    }

    function retorno(texto, vezes){
    res.innerHTML = `${textborda}`
    for(let i = 1; i <= vezes; i++){
        res.innerHTML += `<p>${texto}</p>`
    }
    res.innerHTML += `${textborda}`
    }

    retorno(mensagem, n)

}

