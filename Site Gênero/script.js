function verificar()
{
    var data = new Date()
    var ano  = data.getFullYear()
    var fAno = document.querySelector('input#txtano')
    var res  = document.querySelector('div#res')

    if(fAno.value.length == 0 || fAno.value > ano || fAno.value < 1925)
    {
      window.alert('[ERRO] Algo deu errado verifique seus dados novamente')
    }
    else
    {
        var fsex  = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var sex = ''
        
        //cria dinamicamente uma Tag img 
        var img = document.createElement('img')
        //Da um atributo para tag criada no caso aqui a tag recebe um ID
        img.setAttribute('id','foto')

        if(fsex[0].checked)
        {
            
            if(idade >= 0 && idade <=3)
            {
                var tipo = 'um bebê'
                img.setAttribute('src','foto-bebe-m.png')   
            }  
            else if (idade <=10)
            {
                var tipo = 'uma criança'
                img.setAttribute('src','foto-adolecente-m.png') 
            }
            else if(idade <=18)
            {
                var tipo = 'um adolescente'
                img.setAttribute('src','foto-adolecente-m.png')    
            }
            else if(idade <= 30)
            {
                var tipo = 'um jovem'
                img.setAttribute('src','foto-jovem-m.png')
            }
            else if(idade <= 60)
            {
                var tipo = 'um adulto'
                img.setAttribute('src','foto-adulto-m.png')    
            }
            else
            {
                var tipo = 'um idoso'
                img.setAttribute('src', 'foto-idoso-m.png')    
            } 


        }else
        {

            if(idade >= 0 && idade <=3)
            {
                var tipo = 'uma bebê'
                img.setAttribute('src','foto-bebe-f.png')   
            }  
            else if (idade <=10)
            {
                var tipo = 'uma criança'
                img.setAttribute('src','foto-adolecente-f.png') 
            }
            else if(idade <=18)
            {
                var tipo = 'uma adolescente'
                img.setAttribute('src','foto-adolecente-f.png')    
            }
            else if(idade <= 30)
            {
                var tipo = 'uma jovem'
                img.setAttribute('src','foto-jovem-f.png')
            }
            else if(idade <= 60)
            {
                var tipo = 'uma adulta'
                img.setAttribute('src','foto-adulto-f.png')    
            }
            else
            {
                var tipo = 'uma idosa'
                img.setAttribute('src', 'foto-idoso-f.png')    
            } 
        }
        res.style.textAlign = 'center'
        res.innerHTML = `hum.. Parece que você é ${tipo} de ${idade} anos.` 
        //adiciona uma imagem apos o utimo innerHTML
        res.appendChild(img)
    }
    
}