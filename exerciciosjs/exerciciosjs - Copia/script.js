function carregar() {
    var msnn  = window.document.querySelector('div#img')
    var img = window.document.querySelector('img#hm')
    var data = new Date()
    var hora = data.getHours()
    mg.innerHTML = `<h1>Agora são ${hora} horas</h1>`
    if (hora >= 5 && hora < 12)
    {
    //bom dia
        img.src = 'manha.jpg'
        document.body.style.background = '#038be1'
        msnn.style = 'color: #038be1' 
    }
    else if(hora >=12 && hora <= 18)
    {
        //boa tarde
        img.src = 'tarde.jpg'
        document.body.style.background = '#fa7d00'
        msnn.style = 'color: #fa7d00'
        }
    else () {
        //boa noite
        img.src = 'noite.jpg'
        document.body.style.background = '#112433'
        msnn.style = 'color: #112433'
    }
}