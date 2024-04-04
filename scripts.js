var botao = document.getElementById("botao");
botao.addEventListener("click", alertar, false);
var nome = document.getElementById("nome");

var saida = document.getElementById("saida-de-dados");

var email = document.getElementById("email");

var tel = document.getElementById("tel");

var cep = document.getElementById("cep");

var logra = document.getElementById("logra");

var num = document.getElementById("num");

var compl = document.getElementById("compl");

var bairro = document.getElementById("bairro");

var cid = document.getElementById("cid");

var estado = document.getElementById("estado");

function alertar(event) {
   // alert("Você clicou no botão! " + nome.value);

   const url = `https://viacep.com.br/ws/${cep.value}/json`;

   fetch(url)
   .then(function(resposta){
      return resposta.json()
   })
   .then(function(dados){
      logra.value = dados.logradouro;
      bairro.value = dados.bairro;
      cid.value = dados.localidade;
      estado.value = dados.uf;

      saidaDeDados();
   })

   .catch(function(error){
      alert(error.message);
   })
}
function saidaDeDados(){
   saida.innerText = "Nome: " + nome.value +
   "\n Email: " + email.value +
   "\n Telefone: " + tel.value +
   "\n CEP: " + cep.value +
   "\n Logradouro: " + logra.value +
   "\n N°: " + num.value +
   "\n Complemento: " + compl.value +
   "\n Bairro: " + bairro.value +
   "\n Cidade: " + cid.value +
   "\n Estado: " + estado.value;
}