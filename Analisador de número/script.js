let num = document.getElementById('val')
let sele = document.getElementById('sel')
let valores = []
let res = document.querySelector('div#res')

function verifi () {

    if (num.value == 0) {
        window.alert('[erro]')
    } else if (num.value > 100){
        window.alert('[errooo')
    }
    
    
    else {
        let n = Number(num.value)


        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `O valor ${n} foi adicionado.`
        item.value = `sel${n}`
        sel.appendChild(item)
        let tot = valores.lenght
        res.innerHTML = `${tot}`
    }































}