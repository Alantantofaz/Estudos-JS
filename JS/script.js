function carregar(){

    const msg = window.document.getElementById('msg')
   	let img = window.document.getElementById('imagem')
    const data = new Date()
    const hora = data.getHours()
    msg.innerHTML = `São exatamente ${hora} horas`
    if (hora >= 0 && hora < 12)
    {
        img.src = "img/manha.png"
    }
    else if (hora >= 12 && hora < 18)
    {
        img.src = "img/tarde.png"
    }
    else
    {
        img.src = "img/noite.png"
    }
}


