<?php
    include ('model/conexao.php');

    $sql ="SELECT data,nomeEvento,arquivo
        from evento";

    $prod = mysqli_query($conexao,$sql);
?>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width">
        <link rel='stylesheet' type='text/css' href='public/Styles/Index.css'>
        <link rel="shortcut icon" href="public/Assets/logo/event.png"/>
        <script type="text/javascript" src="public/js/index.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <title>Eventos</title>
    </head>
    <body id="Inicio">
        <nav>
            <ul>
                <li><a href="#Inicio">Inicio</a></li>
                <li id="event"><a href="public/Pages/User.php">Criar Evento</a></li>
                <li><a href="#my-event">Eventos</a></li>
            </ul>
        </nav>
        <div class="container">
            <div class="events">
                <h2>Bem-Vindo</h2>
                <img src="public/Assets/img/1.jpg">
                <img src="public/Assets/img/2.jpg">
                <img src="public/Assets/img/3.jpg">
                <img src="public/Assets/img/4.jpg">
                <img src="public/Assets/img/5.jpeg">
                <img src="public/Assets/img/6.jpeg">
            </div>
            <article>
                <p>Bem vindo a plataforma de eventos a maior plataforma publica já criada 
                para você.A plataforma tem como intuito ajudar você a Encontrar suas lojas 
                de eventos com mais facilidade.</p>
                <p> Cadastrar seu email é a parte mais importante 
                pois precisaremos dele como seu dado para confirmar quando você precisar 
                de um evento.
                </p>
            </article>
        </div>
        <div id="my-event">
            <div>
                <span>Eventos</span>
            </div>
            <hr />
            <div class="container-button">
                <input onclick="clickButton()" type="submit" value="Hoje" id=""/>
                <input onclick="clickButton()" type="submit" value="Amanhã"/>
                <input onclick="clickButton()" type="submit" value="Próxima semana"/>
                <input onclick="clickButton()" type="submit" value="Todos os Eventos"/>
            </div>
            <div class="box">
                <table> 
                    <?php while($dado = $prod->fetch_array()){?> 
                    <tr>
                        <td><?php echo $dado['data'];?></td>
                        <td><?php echo $dado['nomeEvento'];?></td>
                        <td>
                            <img src ="public/Assets/upload/<?php echo $dado['arquivo']; ?>" />
                        </td>
                    </tr>
                    <?php }?>
                </table>
            </div>
        </div>
        <footer>
            <h2>Desenvolvedor</h2>
            <a href="https://www.instagram.com/ino_css/?hl=pt-br" target="_blank">
                <img src="public/Assets/logo/instagram.png"/>
            </a>
            <a href="https://github.com/MarcelinoRodrigues" target="_blank">
                <img src="public/Assets/logo/git.png"/>
            </a>
            <a href="https://whats.link/marcelinorodriguesdonascimento" target="_blank">
                <img src="public/Assets/logo/whatsapp.png"/>
            </a>
        </footer>
    </body>
</html>