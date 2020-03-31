var name      = document.querySelector('#nomeE');
var data      = document.querySelector('#dataE');
var descricao = document.querySelector('#descricao');
var form      = document.querySelector('#form');

//Using new Ajax with form
form.addEventListener("submit", function(event){
    event.preventDefault();

    let dados = {
        nome: name.value,
        data: data.value,
        descricao: descricao.value
    };
    fetch('http://localhost/ProjetoStack/public/Pages/User.php',{
        method: 'POST',
        body: JSON.stringify(dados)
    })
})