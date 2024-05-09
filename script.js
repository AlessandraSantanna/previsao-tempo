
let chave= "4af7ff948f63c71c26a9570d9a77a369"


function colocarNaTela(dados){
    console.log(dados)
}


async function buscarCidade (cidade) {
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cidade +
     "&appid=" + chave +"&lang=pt_br"+ "&units=metric").then( resposta => resposta.json())
   
   
   
     colocarNaTela(dados)
  
}








function cliqueNoBotao(){
   let cidade=document.querySelector(".input-cidade").value
buscarCidade(cidade)
}




