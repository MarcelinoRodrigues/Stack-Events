//Criação Arquivo Marcelino
var form = document.querySelector('#form');

form.addEventListener("submit",FValidation);

function FValidation(){

    var name      = document.querySelector('#nomeE');
    var data      = document.querySelector('#dataE');
    var descricao = document.querySelector('#descricao');

    if(name === ''){
        alert('Preencha por favor o campo nome.')
    }
    if(data  === ''){
        alert('Preencha por favor o campo data.')
    }
    if(descricao === ''){
        alert('Preencha por favor o campo descrição.')
    }
}