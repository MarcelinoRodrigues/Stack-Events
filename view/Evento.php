<?php
    include ('../model/conexao.php');

    //se houver arquivo
    if(isset($_FILES['arquivo'])){
        $nomeE     = $_POST['nomeE'];
        $dataE     = $_POST['dataE'];
        $descricao = $_POST['descricao'];

        //pegando extensao do arquivo
        $extensao = strtolower(substr($_FILES['arquivo']['name'], -4));
        //define o nome do arquivo
        $arquivo_nome = md5(time()).$extensao;
        //define o diretorio destino do arquivo
        $diretorio = "../public/Assets/upload/";

        //efetua o upload
        move_uploaded_file($_FILES['arquivo']['tmp_name'],$diretorio.$arquivo_nome);

        $sql_code = "INSERT INTO evento (nomeEvento,dataEvento,descricao,arquivo) VALUES('".$nomeE."','".$dataE."','".$descricao."','".$arquivo_nome."')";

        mysqli_query($conexao,$sql_code);
    }
?>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    <link rel="shortcut icon" href="../Assets/logo/event.png"/>
    <link rel="stylesheet" type="text/css" href="../public/Styles/Evento.css"/>
    <title>ProjetoStack</title>
</head>
<body>
    <nav>
        <ul>
            <li id="event"><a href="../index.php">Voltar</a></li>
        </ul>
    </nav>
    <form action="Evento.php" id="form" method="POST" enctype="multipart/form-data">
        <h1>Cadastrar Evento</h1>
        <input type="text" name="nomeE" id="nomeE" placeholder="Nome Do Evento" autocomplete="off" require>
        <input type="date" name="dataE" id="dataE" require >
        <textarea placeholder="Descrição Do Evento" name="descricao" id="descricao" autocomplete="off" require>
        </textarea>
        Arquivo:<input type="file" name="arquivo" id="arquivo" >
        <input type="submit" id="send" value="Criar"/>
    </form>
    <footer id="my-footer">
        <h2>Desenvolvedor</h2>
        <a href="https://www.instagram.com/ino_css/?hl=pt-br" target="_blank">
            <img src="../public/Assets/logo/instagram.png"/>
        </a>
        <a href="https://github.com/MarcelinoRodrigues" target="_blank">
            <img src="../public/Assets/logo/git.png"/>
        </a>
        <a href="https://whats.link/marcelinorodriguesdonascimento" target="_blank">
            <img src="../public/Assets/logo/whatsapp.png"/>
        </a>
    </footer>
    <script type="text/javascript" src="../public/js/Evento.js"></script>
</body>
</html>