<?php

include('../conexion.php');
session_start();

header('Content-type:application/json');

$respuesta=array();

if($_SERVER['REQUEST_METHOD']=='POST'){

    if(
        isset($_POST["txtTokenN"]) && isset($_POST["txtTokenS"]) && isset($_POST["txtTokenY"]) &&
        isset($_POST["txtTokenD"])  && isset($_POST["txtTokenC"])  
      )
    {
       $cnx=Conecction::conectar();
       $respuesta=array("estado"=>"true");

       $query="INSERT INTO criptomoneda (dir_mon,cod_mon,nom_mon,sup_tot,dec_mon,dir_cre) VALUES(:dir_mon,:cod_mon,:nom_mon,:sup_tot,:dec_mon,:dir_cre)";

       $resultado=$cnx->prepare($query);

       $dir=$_POST['txtTokenD'];
       $cod=$_POST['txtTokenS'];
       $nom=$_POST['txtTokenN'];
       $sup=$_POST['txtTokenY'];
       $dirc=$_POST['txtTokenC'];
       $dec=5;

       $resultado->bindParam(':dir_mon',$dir);
       $resultado->bindParam(':cod_mon',$cod);
       $resultado->bindParam(':nom_mon',$nom);
       $resultado->bindParam(':sup_tot',$sup);
       $resultado->bindParam(':dec_mon',$dec);
       $resultado->bindParam(':dir_cre',$dirc);

       $resultado->execute();
         
       //$cnx=null;
       return print(json_encode($respuesta));

    }
}

$respuesta=array("estado"=>"false");

return print(json_encode($respuesta));

?>