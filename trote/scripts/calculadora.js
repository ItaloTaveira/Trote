function imc() {
    //colocar uma variável para peso
    //Js é uma linguagem sem tipo
    //document da acesso ao documento inteiro
    //getElementById("peso") recupera a caixa de texto
    //value recupera o valor digitado
    let peso = document.getElementById("peso").value
    let altura = document.getElementById("altura").value
    
    //calcula o imc
    let imc = peso / (altura * altura)
    alert (imc.toFixed(2))

}