<?php
$servername = "localhost";
$database = "eventos";
$username = "root";
$password = "";

$conexao = new mysqli($servername,$username,$password,$database);

if($conexao ->connect_errno)
    echo "falha:(".$conexao->connect_errno.")".$conexao->connect_error;

?>