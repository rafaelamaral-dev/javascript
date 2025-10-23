function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >=0 && hora < 12){
        // Bom dia
        img.src = 'fotomanha.png'
        document.body.style.background = '#F2D852'
    } else if(hora >=12 && hora <18){
        // Boa tarde
        img.src = 'fototarde.png'
        document.body.style.background = '#F25C05'
    } else {
        // Boa noite
        img.src = 'fotonoite.png'
        document.body.style.background = '#074E8C'
    }
}
