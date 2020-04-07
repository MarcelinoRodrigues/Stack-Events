//Criação Arquivo Marcelino
//Adicionando IFEE
(function(){
    //Usando cifrão para diminuir o codigo
    const $ = query => document.getElementById(query)

    //usando evento de clique do formulario
    $('send').addEventListener("click",evento =>{
        const name = $('nomeE').value;
        const data = $('dataE').value;
        const descricao = $('descricao').value;
        const arquivo = $('arquivo').value;

        //validando o formulário
        if(!name || !data || !descricao || !arquivo){
            alert("Preencha Todos os campos")
            return false;
        }
        if(name || data || descricao || arquivo){
            $('h1').innerHTML = "Evento Criado Com Sucesso"
        }

        //criação do objeto Evento
        const Evento = {
            name,
            data,
            descricao,
            arquivo
        }

        //resetando os campos para vazio
        $('nomeE').value     = "";
        $('dataE').value     = "";
        $('descricao').value = "";
        $('arquivo').value   = "";
        
        console.log(Evento)
    })
})()