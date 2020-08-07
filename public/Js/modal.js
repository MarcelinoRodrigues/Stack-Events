const $ = query => document.getElementById(query)
const js = query => document.createElement(query)

$('fechar').addEventListener('click',()=>{
    $('form').style.display = 'none'
})

$('event').addEventListener('click',()=>{
    $('form').style.display = 'block'
})

//usando evento de clique do formulario
$('send').addEventListener("click", () => {
    const name = $('nomeE').value
    const data = $('dataE').value
    const descricao = $('descricao').value

    if (!name || !data || !descricao) {
        alert("Preencha Todos os campos")
        return false;
    }

    //criação do objeto Evento
    const Evento = {
        name,
        data,
        descricao
    }
    
    //resetando os campos para vazio
    $('nomeE').value = "";
    $('dataE').value = "";
    $('descricao').value = "";
})