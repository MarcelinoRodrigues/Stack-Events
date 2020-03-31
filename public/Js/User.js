//Criação Arquivo Marcelino
var form      = document.querySelector('#form');

form.addEventListener("submit",FValidation);

function FValidation(value){
    value.preventDefault();

    var name      = document.querySelector('#nomeE');
    var data      = document.querySelector('#dataE');
    var descricao = document.querySelector('#descricao');
}