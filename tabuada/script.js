function tabuada (){
    let num = document.getElementById('txtn')
    let tabu = document.getElementById('tabu')
    let tab = document.getElementById('seltab')
    
    if (num.value == 0) {
        window.alert('Por favor, digite um número')
    } else {
        let n = Number(num.value)
        let c = 1
        let t = Number(tabu.value)
        tab.innerHTML = ''
        if (t == 0) {
            window.alert("Tabuada Invalida! Considerando Tabuada até o 10.")
            t = 10
        }
        while (c <= t) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }



}