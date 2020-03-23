<?php
    include ('model/conexao.php');

    $sql ="SELECT data,nomeEvento,arquivo
        from evento";

    $prod = mysqli_query($conexao,$sql);
?>
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel='stylesheet' type='text/css' href='public/Styles/Index.css'>
        <script type="text/javascript" src="public/js/index.js"></script>
        <title>Eventos</title>
    </head>
    <body id="Inicio">
        <nav>
            <ul>
                <li><a href="#Inicio">Inicio</a></li>
                <li id="event"><a href="public/Pages/User.php">Criar Evento</a></li>
                <li><a href="#my-footer">Contato</a></li>
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
        <div class="my-event">
            <div>
                <span>Eventos</span>
            </div>
            <hr />
            <div class="container-button">
                <input type="submit" value="Hoje"/>
                <input type="submit" value="Amanhã"/>
                <input type="submit" value="Próxima semana"/>
                <input type="submit" value="Todos os Eventos"/>
            </div>
            <div class="box">
                <table> 
                    <?php while($dado = $prod->fetch_array()){?> 
                    <tr>
                        <td><?php echo $dado['data'];?></td>
                        <td><?php echo $dado['nomeEvento'];?></td>
                        <td>
                            <img><?php echo $dado['arquivo'];?></img>
                        </td>
                    </tr>
                    <tr>
                        <td><?php echo $dado['data'];?></td>
                        <td><?php echo $dado['nomeEvento'];?></td>
                        <td>
                            <img><?php echo $dado['arquivo'];?></img>
                        </td>
                    </tr>
                    <tr>
                        <td><?php echo $dado['data'];?></td>
                        <td><?php echo $dado['nomeEvento'];?></td>
                        <td>
                            <img><?php echo $dado['arquivo'];?></img>
                        </td>
                    </tr>
                    <?php }?>
                </table>
            </div>
        </div>
        <footer id="my-footer">
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