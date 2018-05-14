<?php

include('partials/header.php');

if(isset($_SESSION["usuario"])){

    if($_SESSION["usuario"]["privilegio"]==1){
        
        header("location:admin.php");
    }


}else{
    header("location:login.php");
}




?>

