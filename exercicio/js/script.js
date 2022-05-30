var botao = document.getElementById("botao")
var ano = document.getElementById("idade")
var ano1 = ano.value
var gender = document.getElementById("sexo")
var pessoa = document.getElementById("pessoa")
var res = document.getElementById("resposta")
var idade = 2022 - (parseInt(ano1))



botao.onclick = function(){
    if(ano.value >= 2012 && ano.value < 2023){
        if(gender.value == 1){
            pessoa.innerHTML = '<img src="img/bebe_m.jpg" height="356px" width="240px">'
            res.innerHTML = `O sistema previu que você é um menino com ${idade} anos de idade`  
        }

        else{
            pessoa.innerHTML = '<img src="img/bebe_f.jpg" height="356px" width="240px">'
            res.innerHTML = `O sistema previu que você é uma menina com ${idade} anos de idade`
        }
    }

    else{
        if(ano.value <= 2012 && ano.value >= 2002){
            if(gender.value == 1){
                pessoa.innerHTML = '<img src="img/ado_m.jpg" height="356px" width="240px">'
                res.innerHTML = `O sistema previu que você é um menino com ${idade} anos de idade`
            }

            else{
                pessoa.innerHTML = '<img src="img/ado_f.jpg" height="356px" width="240px">'
                res.innerHTML = `O sistema previu que você é uma menina com ${idade} anos de idade`
            }
        }

        else{
            if(gender.value == 1){
                pessoa.innerHTML = '<img src="img/adult_m.jpg" height="356px" width="240px">'
                res.innerHTML = `O sistema previu que você é um menino com ${idade} anos de idade`
            }

            else{
                pessoa.innerHTML = '<img src="img/adult_f.jpg" height="356px" width="240px">'
                res.innerHTML = `O sistema previu que você é uma menina com ${idade} anos de idade`
            }
        }
    }


}