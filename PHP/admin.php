<?php

include('partials/header.php');
//session_start();

if(isset($_SESSION["usuario"])){

    if($_SESSION["usuario"]["privilegio"]==2){
        
        header("location:user.php");
    }
}else{
    header("location:login.php");
}


?>

