<?php
    session_start();
    if($_SESSION['logado'] != 1){
        header("Location: index.html");
    }

    echo "Tu ta numa página restrita 😈<br>";
    echo "<a href='logout.php'>SAIR</a>";

?>