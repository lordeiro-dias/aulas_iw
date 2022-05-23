var botao = document.getElementById('botao')
var lamp = document.getElementById('lampada')

botao.onclick = function(){
    if(botao.value == 'Acender'){
        lamp.src = './img/acesinha.webp'
        botao.value = 'Apagar'
        botao.innerHTML = '<img src="img/lever12.webp" height="225px" width="225px">'
    }   

    else{
        lamp.src = './img/apagadinha.webp'
        botao.value = 'Acender'
        botao.innerHTML = '<img src="img/lever11.webp" height="225px" width="225px">'
    }
}