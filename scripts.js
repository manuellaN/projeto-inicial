var botao = document.getElementById("botao");
botao.addEventListener("click", alertar, false);
var nome = document.getElementById("nome");

var saida = document.getElementById("saida-de-dados");

var email = document.getElementById("email");

var tel = document.getElementById("tel");

var CEP = document.getElementById("CEP");

var logra = document.getElementById("logra");

var num = document.getElementById("num");

var compl = document.getElementById("compl");

var bairro = document.getElementById("bairro");

var cid = document.getElementById("cid");

var estado = document.getElementById("estado");

function alertar(event) {
   // alert("Você clicou no botão! " + nome.value);


saida.innerText = "Nome: " + nome.value +
              "\n Email: " + email.value +
              "\n Telefone: " + tel.value +
              "\n CEP: " + CEP.value +
              "\n Logradouro: " + logra.value +
              "\n N°: " + num.value +
              "\n Complemento: " + compl.value +
              "\n Bairro: " + bairro.value +
              "\n Cidade: " + cid.value +
              "\n Estado: " + estado.value
              ;

}