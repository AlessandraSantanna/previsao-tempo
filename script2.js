let chave= "4af7ff948f63c71c26a9570d9a77a369"


function colocarNaTela(dados){
    console.log(dados)


document.querySelector(".cidade").innerHTML =  dados.name
document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "° C"
document.querySelector(".descricao").innerHTML =  dados.weather [0].description
document.querySelector(".icone").src="https://openweathermap.org/img/wn/"  + dados.weather [0].icon + ".png"
document.querySelector(".umidade").innerHTML = "Umidade de:  " +(dados.main.humidity)+ "%"
}

async function buscarCidade(cidade) {
 let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cidade +
  "&appid=" + chave +"&lang=pt_br"+ "&units=metric").then( resposta => resposta.json())





    colocarNaTela(dados)


}

function cliqueNoBotao(){
   let cidade=document.querySelector(".input-cidade").value 
   

   buscarCidade(cidade)
   var image = document.getElementById(".tempo");
   image.remove();}

   
    

