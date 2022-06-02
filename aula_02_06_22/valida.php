<?php
    session_start();
    $user = $_POST['user'];
    $pass = $_POST['pass'];

    $us = "banana";
    $ps = "123456";

    if(($user == $us) && ($pass == $ps)){
        $_SESSION['username'] = $user;
        $_SESSION['logado'] = 1;
        header("location: restrita.php");

    }

    else{
        echo "usuario ou senha incorretos";
    }

?>