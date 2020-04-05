//Criação Arquivo Marcelino
//Adicionando IFEE
(function(){
    //Usando cifrão para diminuir o codigo
    const $ = query => document.getElementById(query)

    //usando evento de clique do formulario
    $('send').addEventListener("click",evento =>{
        const name = $('nomeE').value;
        const data = $('dataE').value;
        const descricao = $('descricao');

        //validando o formulário
        if(!name || !data || !descricao){
            alert("Preencha Todos os campos")
            return false;
        }

        //criação do objeto Evento
        const Evento = {
            name,
            data,
            descricao
        }


        const test = localStorage.test ? JSON.parse(localStorage.test) : [];
        test.push(Evento);

        localStorage.test = JSON.stringify(test);

        //resetando os campos para vazio
        $('nomeE').value = "";
        $('dataE').value = "";
        $('descricao').value = "";

        console.log(test)
    })
})()