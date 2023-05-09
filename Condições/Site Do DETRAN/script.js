function calcular() {
    var iddetran = document.getElementById('iddetran')
     var res = document.querySelector('div#res')
    var detran = Number(iddetran.value)
    if (detran < 16) {
                res.innerHTML = (`Você tem ${detran} anos. Logo, você <strong>não</strong> pode votar.`)
    } else if(detran >= 16 && detran <18) {
            res.innerHTML = (`Você tem ${detran} anos. Logo, você pode <strong>optar</strong> por votar.`)
        } else if (detran => 18) {
        res.innerHTML = (`Você é maior de idade. Logo, você é <strong>obrigado</strong> a votar.`)
    }
    }