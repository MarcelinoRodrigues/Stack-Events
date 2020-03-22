<?php
    include ('../../model/conexao.php');

    $msg = "";

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
        $diretorio = "../upload/";

        //efetua o upload
        move_uploaded_file($_FILES['arquivo']['tmp_name'],$diretorio.$arquivo_nome);

        $sql_code = "INSERT INTO evento (nomeEvento,data,descricao,arquivo) VALUES('".$nomeE."','".$dataE."','".$descricao."','".$arquivo_nome."')";
        //$inserir = mysqli_query($conexao,$sql_code);

        if(mysqli_query($conexao,$sql_code))
            $msg = "Arquivo enviado com sucesso!";
        else
            $msg = "Falha ao enviar arquivo";
    }
?>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="../Styles/User.css"/>
    <title>Document</title>
</head>
<body>
    <?php
        if ($msg != false)
            echo "<p> $msg <p>";
    ?>
    <nav>
        <ul>
            <li><a href="../../index.html">Voltar</a></li>
            <li><a href="#my-footer">Contato</a></li>
        </ul>
    </nav>
    <form action="User.php" method="POST" enctype="multipart/form-data">
        <h1>Cadastrar Evento</h1>
        <input type="text" name="nomeE" placeholder="Nome Do Evento">
        <input type="date" name="dataE"/>
        <textarea placeholder="Descrição Do Evento" name="descricao"></textarea>
        Arquivo:<input type="file" name="arquivo" required>
        <input type="submit" value="Criar"/>
    </form>
    <footer id="my-footer">
        <h2>Desenvolvedor</h2>
        <a href="https://www.instagram.com/ino_css/?hl=pt-br" target="_blank">
            <img src="../Assets/logo/instagram.png"/>
        </a>
        <a href="https://github.com/MarcelinoRodrigues" target="_blank">
            <img src="../Assets/logo/git.png"/>
        </a>
        <a href="https://whats.link/marcelinorodriguesdonascimento" target="_blank">
            <img src="../Assets/logo/whatsapp.png"/>
        </a>
    </footer>
</body>
</html>