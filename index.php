<?php
    session_start();
    $_SESSION["info"] = "true";
    if(isset($_COOKIE['id'])) {
        header("Location:../PHP/Menu.php");
    }else{
        include('index.html');
    }
?>