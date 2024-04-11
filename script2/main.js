function imc() {    
    
    //calcular a qtde de leite - Integral, semidesnatado e desnatado = 2 pontos cada
    let leite = document.getElementById("leite").value
    let kit 
    kit = leite * 2

    //Quantas doações de sangue e multiplique por 20
    let sangue = document.getElementById("sangue").value
    let pontos 
    pontos = sangue * 20

    //Pontos da ação social, precisa fazer uma caixa de teste para colocar aação social, não pode ser maior que 2.000 pontos
    let social = document.getElementById("social").value

    //Apresentação músical e teatro = até 1.500 pontos
    let musicateatro = document.getElementById("musicateatro").value

    //Quantos pontos o mascote da equipe teve = até 500 pontos
    let mascote = document.getElementById("mascote").value

    //Quiz = colocar até 1.000 pontos
    let quiz = document.getElementById("quiz").value
    
    //Pontuação extra = equipe precisa cumprir certos quesitos = até 1.000
    let extra = document.getElementById("extra").value
    
    //Kit + suplemento = tarefa cumprida - Informa a equipe (com as cores) = até 5.000
    let ndigitado = document.getElementById("ndigitado").value //total
    let kitcumprido = document.getElementById("kitcumprido").value //entregues
    ndigitado * kitcumprido / 100
    
    //Kit + suplemento = Precisa confirmar as entregas (até um certo número) e colocar os pontos (ultrapassar a meta) não possui meta de valor
    let kitavulso = document.getElementById("kitavulso").value
    //Colocar nos avulsos, quantos foram arrecadados e mais do que o combinado
    let mais = document.getElementById("mais").value 
    let alimento = 30

    
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

};