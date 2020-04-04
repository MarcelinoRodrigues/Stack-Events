//Criação Arquivo Marcelino

function formularioValidation(){

    var name      = document.getElementById('nomeE');
    var data      = document.getElementById('dataE');
    var descricao = document.getElementById('descricao');

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